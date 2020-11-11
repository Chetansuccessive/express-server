import { NextFunction, Request, Response } from 'express';
const checkValidation = ( errors, obj, values, key ) => {

export default (config) => (req: Request, res: Response, next: NextFunction) => {
    const errors = [];
    console.log('Inside ValidationHandler Middleware');
    console.log('Body: ', req.body, 'Query: ', req.query, 'Params: ', req.params);
    const keys = Object.keys(config);  // {'skip','limit'}
    keys.forEach((key) => {
        const obj = config[key];     // {' skip: { } ','limit':{ } }
        const values = {} ;
        let isValueAvail = false;
        obj.in.forEach((val) => {
          values[val] = req[val][key];
          if (req[val][key]) {
            isValueAvail = true;  // check for values
        }
        if (!obj.required && obj.default) {

          req[val][key] = req[val][key] || obj.default;
          values[val] = req[val][key];
         }
        });
        if (Object.keys(req[obj.in]).length === 0) {
            errors.push({
                key: { key },
                location: obj.in,
                message: obj.errorMessage || `Values should be passed through ${obj.in}`,
            });
        }
        console.log('values is', values);
        if (obj.required) {
            if (isNull(values[0])) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: `${key} is required`,
                });
            }
        }
        if (obj.string) {
            if (!(typeof (values[0]) === 'string')) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} Should be a String`,
                });
            }
        }
        if (obj.isObject) {
            if (!(typeof (values) === 'object')) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} Should be an object`,
                });
            }
        }
        if (obj.regex) {
            const regex = obj.regex;
            if (!regex.test(values[0])) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} is not valid expression`,
                });
            }
        }
        if (obj.default) {
            if (isNull(values[0])) {
                // values[0] === obj.default;
            }
        }
        if (obj.number) {
            if (isNaN(values[0]) || values[0] === undefined) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key}  must be an number`,
                });
            }
        }
    });
    if (errors.length > 0) {
        res.status(400).send({ errors });
    }
    else {
        next();
    }
};


          }
        }
    );

    if (errors.length > 0) {
              res.status(400).json({ errors });
          }
          else {
              next();
          }
      };
