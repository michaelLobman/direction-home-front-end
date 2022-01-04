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
        <div className="moments" key={moment.id}>
            <p>{moment.content}</p>
            <h5>{moment.user}</h5>
        </div>
    ))


    function handleSubmit(e){
        e.preventDefault();

        const newEntry = {
            user: name,
            content: userMoment,
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
        <div id="moment-container">
            <div id="add-container">
                <h3 className="subheader" id="moment-h3">Add Your Dylan Moment</h3>
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
                    <button className="button" type="submit">Add Moment</button>
                </form>
            </div>
            <div id="moment-list">
                {renderedMoments}
            </div>
            <img id="moment-img" src="https://media.gettyimages.com/photos/singer-bob-dylan-is-photographed-in-the-1970s-credit-must-read-ken-5-picture-id173184928?s=2048x2048"/>
        </div>
        
    )
}

export default Moments;