const UserModel = require("../models/user")

module.exports = {

    add(user){
        var promise = UserModel.create(user);
        return promise;
    },
    find(user){
        const found = UserModel.findOne({}) 
    },
    registeredEmail(){
        
    }
    
}