module.exports = {
  '200': {
    type: 'OK',
    message:'Request was processed successfully. Results found'
  },

  '202': {
    type: 'Data not available',
    message: 'Error 202, Data not available'
  },

  '400': {
    type: 'Bad request',
    message: 'The request is invalid or has incorrect syntax.'
  },

  '404': {
    type: 'Page not found',
    message: 'Request were processed successfully, and no results were found.'
  },

  '500': {
    type: 'Interval Server error',
    message: '(rare) There was an unexpected server error.'
  }

};
