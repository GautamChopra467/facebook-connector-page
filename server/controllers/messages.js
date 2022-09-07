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