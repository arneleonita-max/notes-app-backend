const Hapi = require('@hapi/hapi');
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
];

const startServer = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  // Register the routes array with the server
  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

startServer();
