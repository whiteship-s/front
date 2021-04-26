module.exports = {

    module: {
        rules: [{

            exclude: /node_modules/,

            use: [
                { loader: 'babel-loader' },
                { loader: 'vue-loader' },
                { loader: 'style-loader'' },
                { loader: 'css-loader', options: { } },
                { loader: 'postcss-loader' },
            ],

        }],
    },

}
