var webpack = require('webpack');
    postcss = require('./postcss.config.js'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'whatwg-fetch',  // Fetch Polyfill
        './src/index.js',
        './styles/styles.css'
    ],
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss'],
                include: [__dirname + '/styles/']
            }
        ]
    },
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // },
    output: {
        path: __dirname + '/dist/assets',
        publicPath: '/assets/',
        filename: 'client.bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin("client.styles.css")
        new webpack.optimize.DedupePlugin(),
        //    new webpack.optimize.UglifyJsPlugin()
        // new webpack.ProvidePlugin({
        //     'Promise': 'exports?global.Promise!es6-promise',
        //     'fetch': 'exports?self.fetch!whatwg-fetch'
        // })
    ],
    postcss: function (wp) {
        return postcss(wp)
    }
};

module.exports = config;