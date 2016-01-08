var webpack = require('webpack');
module.exports = {
    context: __dirname + "/dev",
    entry: "./app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // { test: /\.html$/,                                  loader: 'file?name=[name].[ext]',},
            // { test: /\.css$/,                                   loader: 'style!css' },
            // { test: /\.scss$/,                                  loader: 'style!css!autoprefixer!sass'},
            // { test: /\.(png|jpg)$/,                             loader: 'url?limit=25000'},
            // { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,  loader : 'file-loader'}
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
};
