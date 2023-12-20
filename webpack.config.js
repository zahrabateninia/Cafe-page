const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'main.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Using Babel loader for JavaScript
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // For handling CSS files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i, // For handling image files (PNG, JPG, JPEG, GIF)
        type: 'asset/resource',
      },
      // Add more rules for handling other file types as needed
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }), // Extract CSS into a separate file
    // Add more plugins if required
  ],
  // Define other webpack configurations, optimization settings, etc.
};
