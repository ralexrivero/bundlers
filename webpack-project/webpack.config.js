module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: './dist'
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.(.js|.jsx)$/,
            exclude: /node_modules/,
            use: ['eslint-loader']
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}