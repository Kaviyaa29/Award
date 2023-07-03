const mongoose=require('mongoose')

const connect=async ()=>{

    try{
     await  mongoose.connect('mongodb://127.0.0.1:27017/todolist')
       console.log('db connected...')

    }
    catch(err){
        console.log('error1')
    }


}
module.exports=connect;