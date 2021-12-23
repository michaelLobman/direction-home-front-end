import React from "react";
import Albums from "./Albums";
import LyricWindow from "./LyricWindow";

function Home() {
    return (
        <div>
            <h2 className="page-title">The Unofficial Home for Dylan Fans</h2>
            <Albums />
            <LyricWindow />
        </div>
    )
}

export default Home;