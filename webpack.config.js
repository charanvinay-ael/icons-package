// webpack.config.js

const path = require('path');

module.exports = {
  mode: 'production', // Use 'production' for minified output
  entry: './src/main.js', // Entry point for the application
  output: {
    filename: 'apexcura.icons.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output path
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Apply this rule to CSS files
        use: ['style-loader', 'css-loader'], // Loaders to handle CSS
      },
      {
        test: /\.js$/, // Apply this rule to JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
          options: {
            presets: ['@babel/preset-env'], // Preset for ES6+ compatibility
          },
        },
      },
    ],
  }
};
