import React from "react"

function Albums(){

    // useEffect(() => {


    //     fetch("https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases")
    //         .then(resp => resp.json())
    //         .then(data => console.log(data))
    // })

    //     // fetch("https://api.musixmatch.com/ws/1.1/album.get?album_id=14250417&api_key=98be66592eda60789c1c431407b3d618", {
    //     //     headers: {
    //     //         "Access-Control-Allow-Origin": "https://api.musixmatch.com"
    //     //     }
    //     // })
    //     //     .then(r => r.json())
    //     //     .then(data => console.log(data))

    return (
        <div className="albums-container">
            <p>Albums</p>
        </div>

    )
}

export default Albums;