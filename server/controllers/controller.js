const todo=require('../models/todomodel')


exports.displaylist=async(req,res)=>{
    
    try{
        const data=await todo.find()
        res.send(data);
    }
    catch(err){
        console.log('error')
    }

}
exports.addlist=async(req,res)=>{
    const data=req.body
    try{
      const datas=  await todo.create(data)
        res.send(datas);
    }
    catch(err){
        console.log('error')
    }

}
exports.deletelist=async(req,res)=>{
    const id=req.params.id
    try{
        await todo.findByIdAndDelete(id)
        res.send('added');
    }
    catch(err){
        console.log('error')
    }

}
exports.updatelist=async(req,res)=>{
    const id=req.params.id
    try{
       const data= await todo.findByIdAndUpdate(id,{
           ...req.body
        })
        res.send(data);
    }
    catch(err){
        console.log('error')
    }

}


exports.addnew= (req,res)=>{
       
        const data=req.body;
        console.log(data);
    

}