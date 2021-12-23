import React, { useState, useEffect } from "react";

function LyricWindow(){

    const [lyric, setLyric] = useState("")

    useEffect(() => randomLyric(lyricArray), []);

    useEffect(() => {
        setTimeout(() => randomLyric(lyricArray), 5000)
    })

    const lyricArray = [
        "Everything went from bad to worse...",
        "Money doesn't talk, it swears...",
        "Don't criticize what you can't understand...",
        "And I'll tell it and speak it and think it and breathe it...",
        "All the truth in the world adds up to one big lie...",
        "I bargained for salvation, she gave me a lethal dose...",
        "They say, 'Sing while you slave,' but I just get bored...",
        "It frightens me, the awful truth, of how sweet life can be..."

    ]

    function randomLyric(array) {
        let random = array[Math.floor(Math.random()*array.length)];
        setLyric(random);
    }
    
    return (
        <div className="lyric-window">
            <p className="lyric">{lyric}</p>
        </div>
    )
}

export default LyricWindow;