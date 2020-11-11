import VersionableSchema from './versionable/VersionableSchema' ;

export default class UserSchema extends VersionableSchema {

    constructor(options: any) {
        const baseSchema = {
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String
        };
        super(baseSchema, options);
    }
}
