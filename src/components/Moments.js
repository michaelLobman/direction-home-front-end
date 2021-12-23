import React, { useState } from "react"

function Moments(){

    const [name, setName] = useState("");
    const [moment, setMoment] = useState("");

    console.log(name)


    
    return (
        <div>
            <h4>Add your favorite Dylan moment here</h4>
            <form id="add-moment">
                <label>
                    Name:
                    <input 
                        onChange={e => setName(e.target.value)} 
                        type="text" id="name" 
                        name="name" 
                        value={name}
                    />
                </label>
                <label>
                    Moment:
                    <textarea 
                        onChange={e => setMoment(e.target.value)}
                        rows="3" 
                        columns="50" 
                        id="moment" 
                        name="moment" 
                        value={moment}
                    />
                </label>
                <button type="submit">Add Moment</button>
            </form>
        </div>
        
    )
}

export default Moments;