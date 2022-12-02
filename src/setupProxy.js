const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://bookmyshow-project-backend.vercel.app/',
      changeOrigin: true,
    })
  );
};