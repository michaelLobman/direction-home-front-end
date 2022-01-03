import React from "react";
import LyricWindow from "./LyricWindow";

function Home() {
    return (
        <div>
            <h2 className="page-title">The Unofficial Home for Dylan Fans</h2>
            <LyricWindow />
            <img id="home-img" src="https://media.newyorker.com/photos/5cfd180233dd5c419b77234d/master/pass/Remnick-Netflix.jpg"/>
        </div>
    )
}

export default Home;