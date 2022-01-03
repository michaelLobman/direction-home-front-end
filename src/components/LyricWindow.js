import React, { useState, useEffect } from "react";

function LyricWindow(){

    const [lyric, setLyric] = useState("")

    useEffect(() => randomLyric(lyricArray), []);

    useEffect(() => {
        setTimeout(() => randomLyric(lyricArray), 5000)
    })

    const lyricArray = [
        "Everything went from bad to worse...",
        "Money doesn’t talk, it swears, obscenity, who really cares...",
        "Don't criticize what you can't understand...",
        "And I'll tell it and speak it and think it and breathe it...",
        "All the truth in the world adds up to one big lie...",
        "I bargained for salvation, she gave me a lethal dose...",
        "They say, 'Sing while you slave,' but I just get bored...",
        "It frightens me, the awful truth, of how sweet life can be...",
        "Strike another match, go start anew...",
        "Leave your stepping stones behind, something calls for you...",
        "The harmonica plays the skeleton keys in the rain...",
        "Man has invented his doom, first step was touching the moon...",
        "They'll stone you and then say you are brave...",
        "With a pain that starts and stops like a corkscrew to my heart...",
        "Once upon a time, you dressed so fine...",
        "We're idiots, babe, it's a wonder we can even feed ourselves...",
        "I can't even touch the books you've read...",
        "I'll see you in the sky above, in the tall grass, in the ones I love...",
        "I know every scene by heart, they all went by so fast...",
        "I was thinkin' about turquoise, I was thinkin' about gold...",
        "Aim well my little one, we may not make it through the night...",
        "I am hanging in the balance of a perfect finished plan...",
        "Put out your hand - there’s nothin’ to hold... Open your mouth - I'll stuff it with gold...",
        "Can you tell me what it means to be or not to be? You won't get away with fooling me...",
        "`There must be some way out of here,' said the joker to the thief...",
        "There are many here among us who feel that life is but a joke",
        "In these times of compassion when conformity's in fashion...",
        "Say one more stupid thing to me before the final nail is driven in..."
    ]

    function randomLyric(array) {
        let random = array[Math.floor(Math.random()*array.length)];
        if (lyric !== random) {
            setLyric(random);
        } else {
            randomLyric(array)
        }
    }
    
    return (
        <div className="lyric-window">
            <p className="lyric">{lyric}</p>
        </div>
    )
}

export default LyricWindow;