const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' }
    }
});
fastify.register(require('point-of-view'), {
    engine: {
        ejs: require('ejs')
    }
});
fastify.register(require('./routes/items'));

const PORT = process.env.PORT || 5000;

// run the server
const start = async () => {
    try {
        await fastify.listen(PORT);
    } catch(err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();

