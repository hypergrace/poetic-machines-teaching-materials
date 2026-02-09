// Note: You do not need to add markdown-it to package.json.
let markdown = require("markdown-it")({
  html: true,
});

// const clean = require("eleventy-plugin-clean");

module.exports = function (eleventyConfig) {
  const fs = require("fs");
  const path = require("path");

  // Add markdown filter
  eleventyConfig.addFilter("markdown", function (value) {
    return markdown.render(value);
  });

  // Track figure counts per page
  const figureCounters = {};
  
  // Reset figure counters on each build
  eleventyConfig.on("eleventy.before", async () => {
    Object.keys(figureCounters).forEach(key => delete figureCounters[key]);
  });

  // Ignore draft pages (pages with draft: true in front matter)
  eleventyConfig.addGlobalData("eleventyComputed", {
    eleventyExcludeFromCollections: (data) => {
      if (data.draft === true) {
        return true;
      }
      return false;
    },
    permalink: (data) => {
      if (data.draft === true) {
        return false;
      }
      return data.permalink;
    },
  });

  eleventyConfig.addNunjucksShortcode("p5gallery", function (folder) {
    const fs = require("fs");
    const path = require("path");
    const absFolder = path.join(__dirname, folder);
    if (!fs.existsSync(absFolder)) {
      return "";
    }
    const files = fs.readdirSync(absFolder).filter((f) => f.endsWith(".js"));
    if (files.length === 0) {
      return "";
    }
    let html = "";
    // Add Prism.js for syntax highlighting (only once per page)
    if (!global.__prism_included) {
      html += `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
        `;
      global.__prism_included = true;
    }
    // Directory for generated HTML files (docs/iframes/)
    const outDir = path.join(__dirname, "docs", "iframes");
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    files.forEach((file, idx) => {
      const script = fs.readFileSync(path.join(absFolder, file), "utf8");
      // Extract createCanvas dimensions
      let width = 400,
        height = 400; // default fallback
      const canvasMatch = script.match(
        /createCanvas\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)/
      );
      if (canvasMatch) {
        width = canvasMatch[1];
        height = canvasMatch[2];
      }
      const htmlFileName = `${folder
        .replace(/\\/g, "-")
        .replace(/\//g, "-")}-${path.basename(file, ".js")}-iframe.html`;
      const htmlFilePath = path.join(outDir, htmlFileName);
      // HTML template for iframe
      const iframeHtml = `<!DOCTYPE html>
  <html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\">
    <title>p5 Sketch</title>
    <style>body { margin:0; padding:0; overflow:hidden; }</style>
    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js\"></script>
  </head>
  <body>
  <script>
  ${script}
  </script>
  </body>
  </html>`;
      fs.writeFileSync(htmlFilePath, iframeHtml);
      // Render block with iframe and code
      html += `
    <div class=\"p5-block\" style=\"margin-bottom:2em;\">
      <button onclick=\"toggleP5View('p5-iframe-${idx}', 'p5-code-${idx}')\" style=\"display:block;margin-bottom:1em;padding:0.5em 1em;background:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;\">Toggle Code/Result</button>
      <iframe id=\"p5-iframe-${idx}\" src=\"/iframes/${htmlFileName}\" width=\"${width}\" height=\"${height}\" style=\"border:1px solid #ccc;display:block;\"></iframe>
      <pre id=\"p5-code-${idx}\" class=\"language-javascript\" style=\"display:none;background:#f5f5f5 !important;color:#222;padding:1em;overflow:auto;margin:0;\"><code class=\"language-javascript\">${script
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</code></pre>
    </div>
  `;
    });
    // Toggle logic
    html += `<script>
            function toggleP5View(iframeId, codeId) {
              const iframe = document.getElementById(iframeId);
              const code = document.getElementById(codeId);
              if (iframe.style.display === 'none') {
                iframe.style.display = '';
                code.style.display = 'none';
              } else {
                iframe.style.display = 'none';
                code.style.display = '';
                // Trigger Prism.js syntax highlighting
                if (window.Prism && code.querySelector('code')) {
                  Prism.highlightElement(code.querySelector('code'));
                }
              }
            }
          </script>`;
    return html;
  });
  // Create the filter function.
  function sortByName(values) {
    let vals = values;
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }
  eleventyConfig.addNunjucksShortcode(
    "markdown",
    (content) => `<div class="md-block">${markdown.render(content)}</div>`
  );
  // eleventyConfig.addPlugin(clean);
  eleventyConfig.addPassthroughCopy("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addFilter("sortByName", sortByName);
  eleventyConfig.addPassthroughCopy("src/assets/img/");
  eleventyConfig.addPassthroughCopy("src/assets/p5img/");

  eleventyConfig.addWatchTarget("src/scripts/");
  eleventyConfig.addWatchTarget("src/assets/img/");
  eleventyConfig.addPassthroughCopy("saic/ats3135/exhibition");
  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("src/assets/pdf/");
  eleventyConfig.addWatchTarget("src/assets/pdf/");
  eleventyConfig.addPassthroughCopy("src/assets/js/");
  eleventyConfig.addWatchTarget("src/assets/zips/");
  eleventyConfig.addPassthroughCopy("src/assets/zips/*.zip");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.js":
      "/assets/js/bootstrap.js",
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/bootstrap/dist/css/bootstrap.min.css":
      "/assets/css/bootstrap.css",
  });

  eleventyConfig.addShortcode(
    "syllabusHeader",
    (course, instructor, time, term, location) =>
      `<div class="col-sm-6">
        <div class="py-2">
          <h1> ${course} </h1>
          <ul class="list-group">
            <li class="list-group-item">instructor: ${instructor}</li>
            <li class="list-group-item">time: ${time}</li>
            <li class="list-group-item">term: ${term}</li>
            <li class="list-group-item">location: ${location}</li>
          </ul>
        </div>`
  );
  
  eleventyConfig.addPairedShortcode(
    "agenda",
    function(content, title, items) {
      if (!items || !Array.isArray(items)) {
        return `<div class="col-sm-4">
          <div class="py-2">
          </div>
        </div>`;
      }
      const listItems = items.map(item => `<li class="list-group-item">${item}</li>`).join('');
      return `
       <div class="py-2">
          <h2> ${title} </h2>
          <ul class="list-group">
            ${listItems}
          </ul>
    </div>`;
    }
  );

  // Breakout box shortcode
  eleventyConfig.addPairedShortcode("breakout", function(content) {
    return `
<br>
<div class="card" style="margin:2em 0;padding:2em;background:#f8f9fa;border:2px solid #dee2e6;">
  <div style="font-size:1.5em;text-align:center;line-height:1.6;">
    ${markdown.render(content.trim())}
  </div>
</div>
<br>`;
  });

  // Paired shortcode for inline p5 code blocks
  eleventyConfig.addPairedShortcode("p5code", function(code, description) {
    const fs = require("fs");
    const path = require("path");
    
    // Get weekNum from page data and track figure count
    const weekNum = this.ctx.weekNum || this.page?.weekNum || '';
    const pageKey = this.page?.url || 'default';
    
    if (!figureCounters[pageKey]) {
      figureCounters[pageKey] = 0;
    }
    figureCounters[pageKey]++;
    
    // Generate figure label
    const figureLabel = description 
      ? `Figure ${weekNum} - ${figureCounters[pageKey]}: ${description}`
      : null;
    
    // Generate unique ID for this code block
    const uniqueId = `p5code-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Convert to instance mode
    const instanceCode = convertToInstanceMode(code.trim());
    
    // Extract canvas dimensions from createCanvas call
    let width = 400, height = 400; // defaults
    const canvasMatch = code.match(/createCanvas\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)/);
    if (canvasMatch) {
      width = canvasMatch[1];
      height = canvasMatch[2];
    }
    
    // Create iframe HTML
    const iframeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>p5 Sketch</title>
  <style>body { margin:0; padding:0; overflow:hidden; }</style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
</head>
<body>
<script>
${instanceCode}
</script>
</body>
</html>`;
    
    // Save iframe HTML to docs/iframes/
    const outDir = path.join(__dirname, "docs", "iframes");
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    
    const htmlFileName = `${uniqueId}-iframe.html`;
    const htmlFilePath = path.join(outDir, htmlFileName);
    fs.writeFileSync(htmlFilePath, iframeHtml);
    
    // Build HTML output with optional card wrapper
    let output = '';
    
    if (figureLabel) {
      // Wrap in card if description is provided
      output = `
<div class="card" style="margin-bottom:2em;">
  <div class="card-header"><strong>${figureLabel}</strong></div>
  <div class="card-body">
    <div style="display:flex;gap:1em;flex-wrap:wrap;">
      <div style="flex:0 0 auto;">
        <iframe id="${uniqueId}-iframe" src="/iframes/${htmlFileName}" width="${width}" height="${height}" style="border:1px solid #ccc;display:block;"></iframe>
      </div>
      <div style="flex:1 1 400px;min-width:400px;">
        <pre id="${uniqueId}-code" class="language-javascript" style="background:#f5f5f5 !important;color:#222;padding:1em;overflow:auto;margin:0;height:100%;white-space:pre;"><code class="language-javascript">${code.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
      </div>
    </div>
  </div>
</div>`;
    } else {
      // Original simpler layout without card
      output = `
<div class="p5-block" style="margin-bottom:2em;">
  <div style="display:flex;gap:1em;flex-wrap:wrap;">
    <div style="flex:0 0 auto;">
      <iframe id="${uniqueId}-iframe" src="/iframes/${htmlFileName}" width="${width}" height="${height}" style="border:1px solid #ccc;display:block;"></iframe>
    </div>
    <div style="flex:1 1 400px;min-width:400px;">
      <pre id="${uniqueId}-code" class="language-javascript" style="background:#f5f5f5 !important;color:#222;padding:1em;overflow:auto;margin:0;height:100%;white-space:pre;"><code class="language-javascript">${code.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
    </div>
  </div>
</div>`;
    }
    
    return output;
  });

  // Helper function to convert global mode p5 to instance mode
  function convertToInstanceMode(code) {
    // Check if already in instance mode
    if (code.includes('new p5(')) {
      return code;
    }
    
    // Extract function definitions
    const setupMatch = code.match(/function\s+setup\s*\([^)]*\)\s*\{[\s\S]*?\n\}/);
    const drawMatch = code.match(/function\s+draw\s*\([^)]*\)\s*\{[\s\S]*?\n\}/);
    
    // Get any code outside setup/draw (global variables, other functions)
    let otherCode = code;
    if (setupMatch) otherCode = otherCode.replace(setupMatch[0], '');
    if (drawMatch) otherCode = otherCode.replace(drawMatch[0], '');
    otherCode = otherCode.trim();
    
    // Build instance mode code
    let instanceCode = 'new p5(function(p) {\n';
    
    // Add other code (converted to use p.)
    if (otherCode) {
      instanceCode += '  ' + otherCode.replace(/\n/g, '\n  ') + '\n\n';
    }
    
    // Add setup function
    if (setupMatch) {
      let setupBody = setupMatch[0].replace(/function\s+setup\s*\([^)]*\)\s*\{/, '').replace(/\}$/, '').trim();
      setupBody = addP5Prefix(setupBody);
      instanceCode += `  p.setup = function() {\n    ${setupBody.replace(/\n/g, '\n    ')}\n  };\n\n`;
    }
    
    // Add draw function
    if (drawMatch) {
      let drawBody = drawMatch[0].replace(/function\s+draw\s*\([^)]*\)\s*\{/, '').replace(/\}$/, '').trim();
      drawBody = addP5Prefix(drawBody);
      instanceCode += `  p.draw = function() {\n    ${drawBody.replace(/\n/g, '\n    ')}\n  };\n`;
    }
    
    instanceCode += '});';
    
    return instanceCode;
  }

  // Helper to add p. prefix to p5 functions
  function addP5Prefix(code) {
    const p5Functions = [
      'createCanvas', 'background', 'fill', 'noFill', 'stroke', 'noStroke',
      'strokeWeight', 'ellipse', 'circle', 'rect', 'square', 'triangle', 
      'line', 'point', 'arc', 'quad', 'bezier', 'curve',
      'push', 'pop', 'translate', 'rotate', 'scale',
      'rectMode', 'ellipseMode', 'imageMode', 'angleMode',
      'width', 'height', 'mouseX', 'mouseY', 'pmouseX', 'pmouseY',
      'frameCount', 'frameRate', 'random', 'noise', 'map', 'lerp',
      'sin', 'cos', 'tan', 'radians', 'degrees', 'dist',
      'text', 'textSize', 'textAlign', 'textFont', 'textStyle',
      'loadImage', 'image', 'tint', 'noTint',
      'beginShape', 'endShape', 'vertex', 'bezierVertex', 'curveVertex',
      'color', 'red', 'green', 'blue', 'alpha', 'hue', 'saturation', 'brightness',
      'colorMode', 'blendMode', 'clear', 'erase', 'noErase'
    ];
    
    let result = code;
    p5Functions.forEach(func => {
      // Replace function calls (not already prefixed with p.)
      result = result.replace(
        new RegExp(`(?<!p\\.)\\b${func}\\b(?=\\s*\\()`, 'g'),
        `p.${func}`
      );
      // Replace property access (like width, height, mouseX, etc.)
      if (['width', 'height', 'mouseX', 'mouseY', 'pmouseX', 'pmouseY', 'frameCount'].includes(func)) {
        result = result.replace(
          new RegExp(`(?<!p\\.)\\b${func}\\b(?!\\s*\\()`, 'g'),
          `p.${func}`
        );
      }
    });
    
    return result;
  }

  eleventyConfig.addWatchTarget("src/scripts/introp5/1");

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
