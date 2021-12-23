import React from "react"

function Live(){
    return(
        <div>
            <div className="video-container">
                <iframe 
                    className="video"
                    src="https://www.youtube.com/embed/HRrlFYg2QkI" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                >
                </iframe>
                <iframe 
                    className="video"
                    src="https://www.youtube.com/embed/YwSZvHqf9qM" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                >
                </iframe>
                <iframe 
                    className="video"
                    src="https://www.youtube.com/embed/OeP4FFr88SQ" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                <iframe 
                    className="video" 
                    src="https://www.youtube.com/embed/ujgqOgMIwfA" 
                    title="YouTube video player" 
                    frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default Live;