const get = {
  get: {
    tags: ['Category'],
    summary: 'List all categories',
    description: 'List all categories',
    responses: {
      '200': {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  description: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  }
};

export { get };
