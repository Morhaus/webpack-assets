var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  output: {
    path: './build',
    filename: 'dummy.js', // Never generated, but still required for webpack to run
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
