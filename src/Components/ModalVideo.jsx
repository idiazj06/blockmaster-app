import React, { useState, useEffect } from 'react'

export default function ModalVideo({ item }) {
    const [getVideo, setGetVideo] = useState('')

    useEffect(() => {

        obtenerDatos()

    }, [item.id])

    const obtenerDatos = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&language=us-US`)
        const data = await res.json()

        setGetVideo(data.results[0].key)

    }
    const styleVideo = {
        height: '80vh',
        width: '100vw',
        margin:'auto'
    }

    return (
        <div>
            
            <iframe
                style={styleVideo}
                src={`https://www.youtube.com/embed/${getVideo}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture"
                allowFullScreen />
        </div>
    )
}
