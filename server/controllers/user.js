const operations = require("../db/repository/user_operations")

module.exports = {

   async register(req,res){
      
    try{
        const user = req.body;

        const found = operations.registeredEmail(user.email);

        if(found){
            res.send({message:"User already Registered !"});
        }else{
            const result = await operations.add(user);

            if(result){
                res.send({message:"true"});
            }
            else{
                res.send({message:"Some Error Occured.Try Again !"});
            }
        }
    }catch(err){
      console.log(err)
    }
    },

   async login(req,res){
         
      const user = req.body;

     const found = await operations.find(user);

      if(found){
         res.send({message:"true"})
      }else{
          res.send({message:"Invalid Credentials !"})
      }
     
    }
}