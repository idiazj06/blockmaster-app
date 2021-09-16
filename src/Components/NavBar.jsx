import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { IoPersonCircleSharp } from "react-icons/io5";
import { InputSearch, ButtonSearch, FormSearch, FontNav, Perfil } from '../Styled/style'
import { FaSearch } from 'react-icons/fa';

export default function NavBar({ estado, estadoSearch }) {
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault();
        estado(e.target.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        estadoSearch(e.target.value)
    }

    const handleRedirect = (e) => {
        history.push('/perfil')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light text-center ">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/Peliculas"><img src="https://res.cloudinary.com/duaokxfsp/image/upload/v1631319195/BLOCKMASTER/logo-blockBuster_1_ecwv3y.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <FontNav className="nav-item ">
                                <NavLink
                                    name="Todas las peliculas"
                                    className="nav-link text-white"
                                    to="/Peliculas"
                                    onClick={handleClick}
                                >Todas</NavLink>
                            </FontNav>
                            <FontNav className="nav-item ">
                                <NavLink
                                    name="Peliculas más valoradas"
                                    className="nav-link text-white"
                                    to="/Peliculas"
                                    onClick={handleClick}
                                >Mas Valoradas</NavLink>
                            </FontNav>
                            <FontNav className="nav-item ">
                                <NavLink
                                    name="Peliculas menos valoradas"
                                    className="nav-link text-white"
                                    to="/Peliculas"
                                    onClick={handleClick}
                                >Menos Valoradas</NavLink>
                            </FontNav>
                        </ul>

                        <FormSearch className="d-flex" onSubmit={handleSubmit}>
                            <InputSearch
                                type="text"
                                placeholder="Buscar tu pelicula favorita"
                                onChange={handleInputChange}
                            />

                            <ButtonSearch type="submit"><FaSearch /></ButtonSearch>
                        </FormSearch>

                        <Perfil className="perfil" >
                            <IoPersonCircleSharp onClick={handleRedirect} />
                        </Perfil>


                    </div>
                </div>
            </nav>
        </div>
    )
}
