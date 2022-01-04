import React, { useState, useEffect } from "react";
import VoteButtons from "./VoteButtons";

function RankSongs(){

    const [rankedSongs, setRankedSongs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/songs')
            .then(r => r.json())
            .then(fetchedSongs => {
                let newArray = [];
                fetchedSongs.map(song => newArray.push(song.title));
                setRankedSongs(newArray)
            })
    }, [])

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

    function handleClick(e){
        e.preventDefault();

        for (let i = 0; i < rankedSongs.length; i++) {
            fetch(`http://localhost:4000/songs/${i}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: rankedSongs[i]
             }),
            })
        }

        alert("Rankings saved!")
    }

    return(
        <div id="flex-container">
            <div id="image-container">
                <img className="stacked-img" src="https://consequence.net/wp-content/uploads/2018/09/bob-dylan-blood-tracks-box-set-bootleg-series.png" />
                <img className="stacked-img" src="https://www.rollingstone.com/wp-content/uploads/2018/11/bob-dylan-in-the-studio-1974-Barry-Feinstein.jpg" />
                <img className="stacked-img" src="https://www.rockarchive.com/media/2204/bob-dylan-nobel-news-02.jpg?width=1120&height=undefined&upscale=false&slimmage=true&center=0.5,0.5&mode=crop" />
            </div>
            <div id="vote-container">
                <h3 id="rank-header" className="subheader">Rank the Top Dylan Songs</h3>
                <ul id="song-ul">
                    {renderedSongs}
                </ul>
                <button id="rank-button" className="button" onClick={handleClick}>Save Song Rankings</button>
            </div>
        </div>
    )
}

export default RankSongs;