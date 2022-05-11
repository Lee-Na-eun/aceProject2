const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target : 'http://test.sprfid.io',
            pathRewrite: {
                '^/api': '/',
            },
            changeOrigin : true
        })
    )
}