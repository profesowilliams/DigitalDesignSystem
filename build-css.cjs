const sass = require('sass');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');

// Define the input and output paths
const inputPath = path.resolve(__dirname, 'src/styles/index.scss');
const outputPath = path.resolve(__dirname, 'dist/lit/lit.css');
const minifiedOutputPath = path.resolve(__dirname, 'dist/lit/lit.min.css');

// Compile the SCSS file
const result = sass.renderSync({
  file: inputPath,
  outFile: outputPath,
  includePaths: [path.resolve(__dirname, 'node_modules')],
});

// Write the compiled CSS to the output file
fs.writeFileSync(outputPath, result.css);
console.log('lit.css built successfully.');

// Minify the compiled CSS
postcss([cssnano])
  .process(result.css.toString(), { from: outputPath, to: minifiedOutputPath })
  .then(minified => {
    fs.writeFileSync(minifiedOutputPath, minified.css);
    console.log('lit.min.css built and minified successfully.');
  })
  .catch(error => {
    console.error('Error minifying CSS:', error);
  });
