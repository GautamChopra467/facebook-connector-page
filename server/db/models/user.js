const { SchemaTypes } = require('mongoose');

const connection = require('../connection');

const Schema = connection.Schema;

const userSchema = new Schema({
    'name':{
        type:SchemaTypes.String,
        required:true, 
        unique:true
    },
    'password':{
        type:SchemaTypes.String,
        required:true
    },
    'phoneno':
    {
        type:SchemaTypes.Number,
    },
    'email':{
        type:SchemaTypes.sTring
    }
});

const UserModel = connection.model('users', userSchema);

module.exports = UserModel;