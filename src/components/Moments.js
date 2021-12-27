import React, { useState, useEffect } from "react"

function Moments(){

    const [name, setName] = useState("");
    const [userMoment, setMoment] = useState("");
    const [moments, setMoments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/posts')
            .then(r => r.json())
            .then(moments => setMoments(moments));
    }, [])


    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        console.log(userMoment);
    }
    
    return (
        <div>
            <h4>Add your favorite Dylan moment here</h4>
            <form id="add-moment" onSubmit={handleSubmit}>
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
                        value={userMoment}
                    />
                </label>
                <button type="submit">Add Moment</button>
            </form>
            <div id="moment-ul">
                {moments.map(moment => (
                    <div key={moment.id}>
                        <p>{moment.content}</p>
                        <h5>{moment.user}</h5>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Moments;