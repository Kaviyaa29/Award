

export default function Finish(props){




    return(
        <>
        <  hr style={{width:'75%',marginTop:'2%'}} />
        <div className="addtodo">
                    finished tasks
                    {props.data.map((entry) => {
                        return (

                            <div key={entry._id}>
                                {!entry.status &&
                                    <div>
                                        <h1>{entry.todo}</h1>
                                        <h1>{entry.desc}</h1>
                                       
                                        <button onClick={() =>props.delete(entry._id)}>delete</button>
        
                                    </div> 
                                  
                                }
                            </div>
                        )
                    })}
                </div>


        
        </>
    )
}