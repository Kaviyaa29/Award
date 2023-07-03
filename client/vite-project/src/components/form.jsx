
import { useState } from "react"
export default function Form(){

const [name,setname]=useState();


function sub(e){
     

    const data={
        "name":name
    }
    console.log(data);

    fetch('http://localhost:5000/addnew',{
    method:"POST",
    headers: { 'Content-Type': 'application/json' },
     body:JSON.stringify(data)

 } )
    .then(response=>{
        if(response.ok){
            console.log("added")
        }
        else{
            console.log("err")
        }
    })
    .catch(err=>console.log(err));
    e.preventDefault();
}




    return(
        <>
        
        <form onSubmit={sub} action="">
         
         <input type="text" onChange={(e)=>setname(e.target.value)} />
          <button type="submit">submit</button>

        </form>
        
        </>
    )
}