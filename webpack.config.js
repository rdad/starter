
module.exports = {
  entry: './src/app.js',                 // entry point
    output: {                       // output folder
        path: './dist',             // folder path
        publicPath: __dirname + '/dist',
        filename: 'app-bundle.js'   // file name
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: []
    }
}