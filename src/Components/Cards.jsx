import React, { useEffect, useState } from 'react'
import { Modal } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Tarjetas, ModalHeader, ModalBody, ModalBodyOverview, ModalBodyImg, InputClose, BtnTrailer, BtnDespues, Badge, ImgCard } from '../Styled/style'
import ModalVideo from './ModalVideo';


export default function Cards({ personaje }) {
    const poster = `https://image.tmdb.org/t/p/w500/${personaje.poster_path}`

    const [modal, setModal] = useState(false)
    const [modalVideo, setModalVideo] = useState(false)

    const openOverview = () => { setModal(!modal) }
    const openVideo = () => {
        setModalVideo(!modalVideo)
        setModal(!modal)
    }

    return (
        <Tarjetas onClick={openOverview} >
            <div className="tarjetas">
                <Badge style={(personaje.vote_average >= 8) ? ({ "border": "1px solid green", "borderLeftStyle": "none" }) : (personaje.vote_average > 5) ? ({ "border": "1px solid blue", "borderLeftStyle": "none" }) : ({ "border": "1px solid red", "borderLeftStyle": "none" })}>⭐{personaje.vote_average.toFixed(1)}</Badge>
                <ImgCard src={poster} className="card-img-top" height="330px" alt={personaje.title} />
            </div>

            <Modal isOpen={modal} size={'lg'} contentClassName="bg-dark bg-opacity-100 text-white"  >
                <ModalHeader>
                    <InputClose
                        type="button"
                        value="X"
                        onClick={openOverview}

                    />
                </ModalHeader>
                {/* <ModalBody> */}
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <ModalBodyImg src={poster} alt="" />
                    </div>
                    {/* <ModalBodyOverview> */}
                    <ModalBodyOverview className="col-sm-12 col-md-12 col-lg-6 px-5 ">
                        <div className="overview me-4 my-5  ">
                            <h3 className="py-3">{personaje.title}</h3>
                            <span >{personaje.overview}</span>
                        </div>
                        <div className="row  p-2">
                            <BtnTrailer className=" col-sm-12 col-md-12 col-lg-6  " type="button" value="Ver trailer" onClick={openVideo} />
                            <BtnDespues className=" col-sm-12 col-md-12 col-lg-6 " type="button" value="+ Ver despues" onClick={openVideo} />
                        </div>
                    </ModalBodyOverview>
                    {/* </ModalBodyOverview> */}
                </div>
                {/* <div className="row">
                    <BtnTrailer className="col-sm-12 col-md-6" type="button" value="Ver trailer" onClick={openVideo} />
                    <BtnDespues className="col-sm-12 col-md-6" type="button" value="+ Ver despues" onClick={openVideo} />
                </div> */}

                {/* </ModalBody> */}
            </Modal>

            {/* MODAL VIDEO */}
            <Modal isOpen={modalVideo} size="xl" contentClassName=" modalVideo" >
                <ModalHeader>
                    <InputClose
                        type="button"
                        value="X"
                        onClick={openVideo}
                    />
                </ModalHeader>
                <ModalBody>
                    <ModalVideo item={personaje} />
                </ModalBody>

            </Modal>



        </Tarjetas>
    )
}
