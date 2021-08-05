const {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem
} = require('../controllers/items');

// Item schema
const Item =  {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string'}
    }
}

// options for get all items
const getItemsOpts = {
  schema: {
      response: {
          // success
          200: {
              type: 'array',
              items: Item
          }
      }
  },
    handler: getItems
};
// options for single items
const getItemOpts = {
    schema: {
        response: {
            // success
            200: Item
        }
    },
    handler: getItem
};

// options for post item
const postItemOpts = {
    schema: {
        body: {
          type: 'object',
          required: ['name'],
          properties: {
              name: { type: 'string' }
          }
        },
        response: {
            // created
            201: Item
        }
    },
    handler: addItem
};

// options for post item
const deleteItemOpts = {
    schema: {
        response: {
            // success
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        }
    },
    handler: deleteItem
};

// update item
const updateItemOpts = {
    schema: {
        response: {
            // success
            200: Item
        }
    },
    handler: updateItem
};

function itemRoutes (fastify, options, done) {

    // get all items, endpoint, options, handler
    fastify.get('/items', getItemsOpts);

    // get a single item (id)
    fastify.get('/items/:id', getItemOpts);

    // add item
    fastify.post('/items', postItemOpts);

    // delete item
    fastify.delete('/items/:id', deleteItemOpts);

    // update item
    fastify.put('/items/:id', updateItemOpts);

    done()

}

module.exports = itemRoutes
