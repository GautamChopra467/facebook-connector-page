const axios = require("axios")

module.exports = {

       async comments(req,res){
        try{
            const allComments = await axios.get(`${process.env.ALL_COMMENTS}?access_token=${process.env.PAGE_ACCESS_TOKEN}`)
            
            res.send(allComments.data)

        }catch(err){
            console.log(err)
        }
          
       }
}

