const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('home', '/', 'index');
routes.add('test', '/test/:testId', 'test');
routes.add('notification', '/notification/:notification', 'notification');


module.exports = routes;
