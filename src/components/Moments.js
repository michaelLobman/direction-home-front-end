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

    const renderedMoments = moments.map(moment => (
        <div key={moment.id}>
            <p>{moment.content}</p>
            <h5>{moment.user}</h5>
        </div>
    ))


    function handleSubmit(e){
        e.preventDefault();

        const newEntry = {
            user: name,
            content: userMoment,
            upvotes: 0,
            downvotes: 0,
        }

        fetch('http://localhost:4000/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newEntry),
        })
            .then(r => r.json())
            .then(newMoment => setMoments([...moments, newMoment]))

        setMoment("");
        setName("");
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
            <div id="moment-list">
                {renderedMoments}
                {/* {moments.map(moment => (
                    <div key={moment.id}>
                        <p>{moment.content}</p>
                        <h5>{moment.user}</h5>
                    </div>
                ))} */}
            </div>
        </div>
        
    )
}

export default Moments;