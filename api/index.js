const strapi = require('@strapi/strapi');
const app = strapi({ distDir: './dist' });

module.exports = async (req, res) => {
  await app.load();
  app.server.mount();
  return app.server.app(req, res);
};
