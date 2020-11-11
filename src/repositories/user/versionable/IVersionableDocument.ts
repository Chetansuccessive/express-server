import * as mongoose from 'mongoose';
export default interface IVersionableDocuments extends mongoose.Document {
    deleteAt: Date;
    originalId: string;
    createdAt: Date;
}