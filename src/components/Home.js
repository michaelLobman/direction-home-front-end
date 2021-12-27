import React from "react";
// import Albums from "./Albums";
import LyricWindow from "./LyricWindow";
import TopSong from "./TopSong";

function Home() {
    return (
        <div>
            <h2 className="page-title">The Unofficial Home for Dylan Fans</h2>
            <TopSong />
            <LyricWindow />
        </div>
    )
}

export default Home;