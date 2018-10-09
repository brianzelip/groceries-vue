// see:
//  https://cssnano.co/guides/presets for cssnano docs
//  https://parceljs.org/transforms.html#set-cssnano-minify-config
module.exports = {
  preset: [
    'default',
    {
      calc: false,
      discardComments: {
        removeAll: true
      }
    }
  ]
};
