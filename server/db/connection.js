const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{

    useNewUrlParser:true,
    useUnifiedTopology:true

},(err)=>{
    if(err){
        console.log('DB Error ', err);
    }
    else{
        console.log('DB Connection Created...');
    }
});
module.exports = mongoose;