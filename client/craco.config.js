const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    // ...
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@pages': resolvePath('./src/pages'),
            '@assets': resolvePath('./src/assets'),
            '@styles': resolvePath('./src/styles')
        }
    },
    style : {
        sass: {
            loaderOptions: (sassLoaderOptions, { env, paths }) => { return sassLoaderOptions; }
        }
    }
  // ...
}