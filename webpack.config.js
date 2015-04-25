var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  entry: './entry.js',

  output: {
    path: './build',
    filename: 'output.js',
  },

  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
          'image?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ]
      },
    ],
  },

  plugins: fs.readdirSync('./images').map(function(imagePath) {
    return new webpack.PrefetchPlugin('./images/' + imagePath);
  })
};
