const operations = require("../db/repository")

module.exports = {

   async register(){
      
        const user = req.body;
        
        const found = await operations.registeredEmail(user.email);

        if(found){
            res.send({message:"User Already Registered !"});
        }
        else{
            const result = await operations.add(user);

            if(result){
                res.send({message:"true"});
            }
            else{
                res.send({message:"Some Error Occured.Try Again !"});
    
            }
        }
    },
    login(){
         

    }
}