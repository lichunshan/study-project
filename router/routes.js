module.exports = function(app) {
  const homeRouter = require('./publish/home.js');
  app.use(homeRouter.routes()).use(homeRouter.allowedMethods());
};
