import React, { useState, useEffect } from 'react'

export default function ModalVideo({ item }) {
    const [getVideo, setGetVideo] = useState('')

    useEffect(() => {

        obtenerDatos()

    }, [item.id])

    const obtenerDatos = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&language=us-US`)
        const data = await res.json()

        if(data.results == ''){
            return
        }else{
            setGetVideo(data.results[0].key)
        }


        // setGetVideo(data.results[0].key)

    }
    const styleVideo = {
        height: '80vh',
        width: '100vw',
        margin: 'auto'
    }

    return (
        <div>

            {
                getVideo == '' ?
                    <img src="https://lh3.googleusercontent.com/proxy/qAkMhYIOGbEelO-XiweLyKK_FvlkE_u335306ef7Ql2sElLx-4Jmp0D2AnxZv0SyPfSaVAJ1ymvjNjQ_4EeTPct3iKZh28WLrNE8QjHhPvcPtiB6V-iC7lRmees" alt="" />
                    :
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
            }
            {/* <iframe
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
                allowFullScreen /> */}
        </div>
    )
}
