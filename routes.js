const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('home', '/', 'index');
routes.add('test', '/test/:testId', 'test');
routes.add('register', '/register');
routes.add('login', '/login');
routes.add('interested_language', '/interested_language');
routes.add('interested_people', '/interested_people');
routes.add('profile', '/profile');

routes.add('pair', '/pair/:pairId', 'pair');

module.exports = routes;