import React from "react"

function Live(){
    return(
        <div>
            <h2 className="page-title">Dylan Live</h2>
            <div className="video-container">
                <iframe 
                    className="video"
                    src="https://www.youtube.com/embed/HRrlFYg2QkI" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                    className="video"
                    src="https://www.youtube.com/embed/YwSZvHqf9qM" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    )
}

export default Live;