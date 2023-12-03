import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};
