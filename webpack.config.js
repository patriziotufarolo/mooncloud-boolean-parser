module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + "/dist",
        filename: "mooncloud-boolean-parser.js"
    },
    module: {
        loaders: [
            {
                test: /.js/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
