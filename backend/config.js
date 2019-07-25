const all = {
  SECRETS: {
    SESSION: 'm-bloomcatch-secret'
  },
  ENVIRONMENT: 'PRODUCTION',
  //ENVIRONMENT: 'DEVELOPMENT',
  RESPONSE_CODES: {
    NOT_LOGGED_IN: {
      CODE: 1000,
      MESSAGE: "It looks like you aren't logged in, please try again."
    },
    SUCCESS: {
      CODE: 200
    },
    NO_USER_WITH_TOKEN: {
      CODE: 1001
    },
    UNAUTHORIZED: {
      CODE: 401,
      MESSAGE: 'No authorization header found in the request'
    },
    INVALID_BODY: {
      CODE: 400,
      MESSAGE: 'The request body is invalid'
    }
  }
};

module.exports = all;
