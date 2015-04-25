module.exports = {
  entry: './images.js',

  output: {
    path: './build',
    filename: 'images.js',
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
};
