const axios = require("axios")

module.exports = {
   
   async getMessages(req,res){

        const {id} = req.params;

        console.log("Called")

        // const senderInfo = [];

       const messages = await axios.get(`${process.env.ALL_POST_INFO}/${id}/conversations?fields=messages{from,message,created_time,id,to}&access_token=${process.env.PAGE_ACCESS_TOKEN}`)

       console.log(messages.data.data.length)

       console.log("Called")
    //    for(let i= 0;i<messages.data.data.length;i++)
    //    { 
            console.log(messages.data.data[0].messages.data.length);
    //    }


    //    res.send(messages.data)

    //    curl -i -X GET \
//  "https://graph.facebook.com/v14.0/108046888706313/conversations?fields=messages%7Bfrom%2Cmessage%2Ccreated_time%2Cid%2Cto%7D=EAAFngNLzTzIBACAHWnZBbqKh3Aa0QqqpmLxhyHwhIqf5YIzRrSmaLrDQosxOZBSWDuFq0it5vVrKAX5SAlZBSeIZChMJIgO4PHpv0tbtDB7f3Neq07ax8WOOWTPzSe9oympIzVRtvNOZAm81OZBlDS0zpBblKw8ipVHfQ0fWZAn9PiZACxSdo5JEtAFM96ZBeQmM7rtZBEjp7UYQZDZD"


    },
    async postMessage(req,res){

        try{

            const {id,ps_id} = req.params;

            const {message} = req.body;

            console.log(message);
            console.log(id);
            console.log(ps_id);

            const messageposted = await axios.post(`${process.env.ALL_POST_INFO}/${id}/messages?recipient={'id':${ps_id}}&messaging_type=RESPONSE&message={'text':${message}}&access_token=${process.env.PAGE_ACCESS_TOKEN}`)



            console.log(messageposted.data)

        }catch(err){
            console.log(err)
        }
     
       
    }
}