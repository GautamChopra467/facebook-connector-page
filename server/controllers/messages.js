const axios = require("axios")

module.exports = {

    async senderInfo(req,res){

        let info = [];

        const {data} = await axios.get(`https://graph.facebook.com/v14.0/me/conversations?fields=participants,messages{message,from,to,created_time},snippet&access_token=${process.env.PAGE_ACCESS_TOKEN}`)

        for(let i=0;i<data.data.length;i++){
            for(let j=0;j<data.data[i].participants.data.length;j++){
                if(data.data[i].participants.data[j].id !== "108046888706313"){
                    try{
                        const participant =  await axios.get(`https://graph.facebook.com/v14.0/${data.data[i].participants.data[j].id}?access_token=${process.env.PAGE_ACCESS_TOKEN}`)
                        participant.data["conversation_id"] = data.data[i].id;
                        participant.data["snippet"] = data.data[i].snippet;
                        participant.data["message"] = data.data[i].messages;
                        info.push(participant.data);
                    }catch(err){
                        if(err.code == "ERR_BAD_REQUEST"){
                            continue;
                        }else{
                            console.log(err)
                        }
                    }
            }
        }
    }
    res.send(info)
    },
    async getConversations(req,res){

        const {id,c_id} = req.params;

        console.log(id);
        console.log(c_id);

        // const PageAccessToken = await axios.get(`${process.env.GRAPH_API_URL}/${id}?fields=access_token&access_token=${process.env.LONG_LIVE_ACCESS_TOKEN}`);

        // const data = await axios.get(`${process.env.GRAPH_API_URL}/${c_id}/messages?fields=message,from,to,created_time&access_token=${PageAccessToken.data.access_token}`);

        // console.log(data);

    },
    async postMessage(req,res){

        try{

            const {id,ps_id} = req.params;

            const {message} = req.body;

            console.log(message);
            console.log(id);
            console.log(ps_id);

            const messageposted = await axios.post(`${process.env.GRAPH_API_URL}/${id}/messages?recipient={'id':${ps_id}}&messaging_type=RESPONSE&message={'text':${message}}&access_token=${process.env.PAGE_ACCESS_TOKEN}`)

            console.log(messageposted.data)

        }catch(err){
            console.log(err)
        }
     
       
    },

}