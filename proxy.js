const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/v1', 
    createProxyMiddleware({
      target: 'https://wallet.release.newpay.com.ar',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyReq: (proxyReq, req) => {
        if (req.method === 'OPTIONS') {
          proxyReq.method = 'GET'; // Cambia el método para manejar preflight
        }
      },
    })
  );
};