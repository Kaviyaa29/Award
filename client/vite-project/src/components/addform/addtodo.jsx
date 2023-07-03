import {  useState } from "react"
import './addtodo.css'

export default function Add(props) {


    const [todo, settodo] = useState()
    const [desc, setdesc] = useState()

    const addtodo = (e) => {

        const tododata = {
            "todo": todo,
            "desc": desc,
            "status": true
        }


        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tododata)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        e.preventDefault()
    }

    return (
        <>


<  hr style={{width:'75%',marginTop:'2%'}} />
            <div className="addtodo">
                <h2>Add New</h2>

                <form onSubmit={addtodo} action="">
                    <input placeholder="Task" type="text" onChange={(e) => settodo(e.target.value)} /> <br />
                    <input placeholder="Description" type="text" onChange={(e) => setdesc(e.target.value)} /> <br />

                    <button type="submit"  >add</button>
                </form>

            </div>
        </>
    )
}