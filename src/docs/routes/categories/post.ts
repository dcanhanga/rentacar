const post = {
  post: {
    tags: ['Category'],
    summary: 'Create a Categories',
    description: 'Create a new category',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              },
              description: {
                type: 'string'
              }
            },
            example: {
              name: 'category name sample',
              description: 'description sample'
            }
          }
        }
      }
    },
    responses: {
      '201': {
        description: 'Categoria cadastrada com sucesso.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string'
                }
              }
            },
            example: {
              message: 'Categoria name sample cadastrada com sucesso.'
            }
          }
        }
      },
      '409': {
        description: 'Conflito ao cadastrar ',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string'
                }
              }
            },
            example: {
              message: 'Categoria name sample não foi cadastrada porque já existe no sistema.'
            }
          }
        }
      }
    }
  }
};
export { post };
