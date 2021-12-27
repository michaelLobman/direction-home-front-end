import React from "react";

function VoteButtons({ onVote }){
    return(
        <div id="vote-buttons">
            <button className="up" onClick={onVote}>↑</button>
            <button className="down" onClick={onVote}>↓</button>
        </div>
    )
}

export default VoteButtons;