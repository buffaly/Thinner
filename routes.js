const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('home', '/', 'index');
routes.add('test', '/test/:testId', 'test');

module.exports = routes;