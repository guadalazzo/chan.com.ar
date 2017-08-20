const {env} = require('../configuration.js');
isProd = env.NODE_ENV === 'production';
module.exports = {
    test: /\.ts$/,
    use: [
        {
            loader: 'awesome-typescript-loader',
            options: { useCache: !isProd }
        },
        'angular2-template-loader'
    ]
};