const axios = require("axios")

module.exports = {

   

    // async comments(req, res) {
    //     try {
    //         const allComments = await axios.get(`${process.env.ALL_COMMENTS}?access_token=${process.env.PAGE_ACCESS_TOKEN}`)

    //         res.send(allComments.data)

    //     } catch (err) {
    //         console.log(err)
    //     }

    // },
    async allPagesInfo(req, res) {
        try {

            let allpagesInfo = []
            
            const allPagesInfo = await axios.get(`${process.env.ALL_PAGES_INFO}&access_token=${process.env.LONG_LIVE_ACCESS_TOKEN}`)

            for(let i=0;i<allPagesInfo.data.data.length;i++){
                try{
                    const allPostInfo = await axios.get(`${process.env.ALL_POST_INFO}/${allPagesInfo.data.data[i].id}?fields=name,unread_notif_count,unread_message_count,category,picture&access_token=${process.env.PAGE_ACCESS_TOKEN}`)

                    allpagesInfo = [...allpagesInfo,allPostInfo.data];

                }
                catch(err){
                    console.log(err)
                }  
            }

            res.send(allpagesInfo)

        } catch (err) {
            console.log(err)
        }

    },
    async allPostInfo(req, res) {
        try {

            const allPostInfo = await axios.get(`${process.env.ALL_POST_INFO}?fields=full_picture,message,comments,likes,shares&access_token=${process.env.PAGE_ACCESS_TOKEN}`)

            res.send(allPostInfo.data)

        } catch (err) {
            console.log(err)
        }

    },
    async singlePagesInfo(req,res){
        try{

            const {id} = req.params;

            const singlepageinfo = await axios.get(`${process.env.ALL_POST_INFO}/${id}/feed?fields=full_picture,created_time,message,comments{created_time,from,message}
            &access_token=${process.env.PAGE_ACCESS_TOKEN}`)

           res.send(singlepageinfo.data.data)

        }catch(err){
           console.log(err)
        }
    }
    // 108046888706313/posts?fields=full_picture,comments{from,created_time,message,like_count,comment_count}
}


// me/accounts?fields=name,picture,id