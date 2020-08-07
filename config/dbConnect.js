

const mongoose=require('mongoose');

// database connectivity 
const conn = mongoose.connect ("mongodb://127.0.0.1:27017/joivalidation",{ useNewUrlParser:true },(err)=>{
if(!err) {console.log("Mongodb Connection Succeded")}
else{ console.log("Error in Connection:",err)}

});
