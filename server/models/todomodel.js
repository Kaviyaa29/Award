const mongoose=require('mongoose')


const todo=new mongoose.Schema({
    todo:String,
    desc:String,
    status:Boolean
})

module.exports=mongoose.model('todo',todo)