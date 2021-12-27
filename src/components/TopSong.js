import React, { useState } from "react";
import VoteButtons from "./VoteButtons";

function TopSong(){

    const songArray = [
        "Shelter from the Storm",
        "It's All Over Now, Baby Blue",
        "Like a Rolling Stone",
        "Blowin' in the Wind",
        "Hurricane",
        "Tangled Up in Blue",
        "It's Alright, Ma (I'm Only Bleeding)",
        "Mr. Tambourine Man",
        "A Hard Rain's a-Gonna Fall",
        "Visions of Johanna"
    ]

    const [rankedSongs, setRankedSongs] = useState(songArray);

   

    function onVote(e){
        const voteClass = e.target.className;
        const votedSong = e.target.parentElement.parentElement.id;
        const currentIndex = rankedSongs.indexOf(votedSong);
        const updatedSongs = [...rankedSongs];



        if (voteClass === "up") {
            if (currentIndex === 0) {
                return updatedSongs;
            } else {
            [updatedSongs[currentIndex], updatedSongs[currentIndex - 1]] = [updatedSongs[currentIndex - 1], updatedSongs[currentIndex]];
            }
        } else {
            if (currentIndex === 9) {
                return updatedSongs;
            } else {
                [updatedSongs[currentIndex], updatedSongs[currentIndex + 1]] = [updatedSongs[currentIndex + 1], updatedSongs[currentIndex]];
            }
        }

        setRankedSongs(updatedSongs);
    }

    const renderedSongs = rankedSongs.map(song => <li id={song} className="song" key={song}>{song}<VoteButtons onVote={onVote}/></li>)

    return(
        <div id="vote-component">
            <h3>Vote for the best Dylan Song</h3>
            <ul id="song-ul">
                {renderedSongs}
            </ul>
        </div>

    )

}

export default TopSong;