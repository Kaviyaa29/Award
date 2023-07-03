const express=require('express')
const cors=require('cors')
const bodyparser =require('body-parser')
const app=new express();
const connect =require('./db/db.js')

app.use(bodyparser.json())
app.use(cors({origin:'*'}))

const { displaylist, addlist, deletelist, updatelist ,addnew} =require('./controllers/controller.js');


app.get('/',displaylist)
app.post('/add',addlist)
app.delete('/delete/:id',deletelist)
app.post('/update/:id',updatelist)


app.post('/addnew',addnew)

connect()
app.listen(5000,()=>{
   console.log('server is running ...') 
})