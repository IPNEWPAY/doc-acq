const { createProxyMiddleware } = require('http-proxy-middleware');

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    const proxy = createProxyMiddleware({
      target: 'https://wallet.release.newpay.com.ar',
      changeOrigin: true,
      pathRewrite: {
        '^/.netlify/functions/proxy': '', // Elimina la ruta del proxy en Netlify
      },
      onProxyRes: (proxyRes) => {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type';
      },
    });

    const fakeRes = {
      writeHead: (status, headers) => {
        context.statusCode = status;
        context.headers = headers;
      },
      end: (body) => {
        resolve({
          statusCode: context.statusCode,
          headers: context.headers,
          body: body,
        });
      },
    };

    proxy(event, fakeRes, (error) => {
      if (error) reject(error);
    });
  });
};
