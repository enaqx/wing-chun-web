var Hapi = require('hapi');
var server = new Hapi.Server(3001);

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'web',
      listing: true,
      index: true,
    }
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
