import { useEffect, useState } from "react"
import Update from "./update/update";
import Finish from "./finished/finish";
import Add from "../addform/addtodo";
import './tasks.css'
export default function Tasks(props) {



    const [data, setdata] = useState([])
    const [uid, setuid] = useState(Number)
    const [updatemodal, setupdatemodal] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setdata(data))
            .catch(err => console.log('error'))
    }, [data])

    const deletetodo = (id) => {
        fetch(`http://localhost:5000/delete/${id} `, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
        })
            .then(response => {
                if (response.ok) {

                    console.log('Data deleted successfully');
                } else {

                    console.error('Error deleting data');
                }
            })
            .catch(error => {
                console.error('Error deleting data', error);
            });

    }

    const updatetodo = (id) => {

        setuid(id)
        console.log(uid)
        setupdatemodal((prev) => !prev)



    }

    const closeupdateform = () => {
        setupdatemodal((prev) => !prev)

    }
    const finisheddata = (id) => {
        const tododata = {
            "status": false,
        }


        fetch(`http://localhost:5000/update/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tododata)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }

    //     const datas = JSON.parse(JSON.stringify(data))
    //     const tododata=datas.filter((e)=>(
    //        e.status==true
    //     ))
    //    console.log(tododata)
    return (
        <>
            <div className="tasks">
                <div>
                    <h1>Tasks to finish</h1>
                </div>

                <div className="task">


                    {data.map((entry) => {
                        return (

                            <div key={entry._id}>
                                {entry.status &&
                                    <div>
                                        <div>
                                            
                                        </div>
                                       <h3>Task :{entry.todo}</h3>
                                        <h3>description :{entry.desc}</h3>


                                        <div>
                                            <button onClick={() => updatetodo(entry._id)} >update</button>
                                            <button onClick={() => deletetodo(entry._id)}>delete</button>
                                            <button onClick={() => finisheddata(entry._id)}>finished</button>
                                        </div>
                                    </div>

                                }
                            </div>
                        )
                    })}

                </div>



            </div>


            <Add />


            <Finish data={data} delete={deletetodo} />

            <div>
                {updatemodal && <Update id={uid} close={closeupdateform} />}

            </div>

        </>
    )
}