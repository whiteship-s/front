const path = require('path');



module.exports = {

    publicPath: '/',

    outputDir: 'dist',

    runtimeCompiler: true,

    configureWebpack: {

        resolve: {
            alias: {
                '/utils': path.resolve(__dirname, 'src/@utils'),
                '/components': path.resolve(__dirname, 'src/components'),
                '/assets': path.resolve(__dirname, 'src/assets'),
            }
        },

        plugins: [],

    },

    chainWebpack: (config) => {

        config.devServer
            .host(process.env.VUE_APP_HOST)
            .port(process.env.VUE_APP_PORT)

    },

}
