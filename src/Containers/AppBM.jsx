import React, { Component, useState } from 'react'
import ApiFetch from '../Components/ApiFetch'
import Carrusel from '../Components/Carrusel'
import NavBar from '../Components/NavBar'

export default function AppBM() {
    const [seccion, setSeccion] = useState('Todas las peliculas')
    const [search, setSearch] = useState('')
    const [movieCarousel, setMovieCarousel] = useState('')

    return (
        <div>
            <NavBar estado={setSeccion} estadoSearch={setSearch} />
            <Carrusel data={movieCarousel} />
            <ApiFetch dato={seccion} datoSearch={search} dataCarousel={setMovieCarousel} />
        </div>
    )
}
