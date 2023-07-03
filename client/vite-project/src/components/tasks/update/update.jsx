import { useState } from "react"
import './update.css'

export default function Update(props) {
    const [updatedesc, setupdatedesc] = useState()

    const updatedescription = (e) => {


        const tododata = {
            "desc": updatedesc,
        }


        fetch(`http://localhost:5000/update/${props.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tododata)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        e.preventDefault()

        props.close();
    }


    return (

        <>
            <div className="update">


                <form onSubmit={updatedescription} action="
        ">
                    change description

                    <input type="text" onChange={(e) => setupdatedesc(e.target.value)} />
                    <button type="submit">update</button>
                </form>

            </div>
        </>
    )

}