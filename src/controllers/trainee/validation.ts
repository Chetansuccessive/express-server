const config = {
<<<<<<< HEAD
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid'
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid'
        }
    },
    create: {
        id: {
            required: true,
            string: true,
            in: ['body'],
            custom: (Value) => {
                console.log(`Value ${Value}`);
                throw { error: 'Error Occured', message: 'Message' };
            }
        },
        name: {
            required: true,
            regex: '',
            in: ['body'],
            errorMessage: 'Name is required'
        }
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
        }
    }
};

export default config;
=======
    create: {
      id: {
        required: true,
        string: true,
        in: ['body'],
        custom (value) {
          console.log('Value', value);
          throw {
            error: 'Error Occured',
            message: 'Message'
          };
        }
      },
      name: {
        required: true,
        regex: '',
        in: ['body'],
        errorMessage: 'Name is required',
      }
    },
    Delete: {
      id: {
        required: true,
        errorMessage: 'Id is required',
        in: ['params']
      }
    },
    get: {
      skip: {
        required: false,
        default: 0,
        number: true,
        in: ['query'],
        errorMessage: 'Skip is invalid',
      },
      limit: {
        required: false,
        default: 10,
        number: true,
        in: ['query'],
        errorMessage: 'Limit is invalid',
      }
    },
    update: {
      id: {
        required: true,
        string: true,
        in: ['body']
      },
      dataToUpdate: {
        in: ['body'],
        required: true,
        isObject: true,
        custom: (dataToUpdate) => {
          console.log('dataToUpdate' , dataToUpdate);
        },
      }
    }
  };
    export default config;
>>>>>>> bfb861569aea10ee0dbd384aede4726d950e9c9f
