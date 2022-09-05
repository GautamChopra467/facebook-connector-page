
module.exports = {
    ROUTES :{
        POST:{
            FEED :'/feed',
            INFO:"/allpostinfo",
            PAGE:"/pageinfo",
            SINGLEPAGE:"/singlepageinfo/:id",
            COMMENT:"/comment/:id",
            DELETECOMMENT:"/deletecomment/:id"
        },
        USER:{
            SIGNUP:"/signup",
            LOGIN:"/login"

        }
    }
}