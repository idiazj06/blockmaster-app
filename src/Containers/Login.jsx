import React, { useEffect, useState } from 'react'
import axios from 'axios'
import md5 from 'md5'
import LoginForm from '../Components/LoginForm'
import { Contenedor } from '../Styled/style'
import { Link , useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

const url = 'https://api-blockmaster.herokuapp.com/users' //Data de usuarios

export default function Login() {

    const history = useHistory()

    const [check, setCheck] = useState(false)
    const [datosLogin, setDatosLogin] = useState('')

    const Login = async datos => {
        await axios.get(url, {
            params: {
                email: datos.email,
                password: md5(datos.password)
            }
        })
            .then(respuesta => {
                return respuesta.data
            })
            .then(respuesta => {
                if (respuesta.length > 0) {
                    var res = respuesta[0];
                    Swal.fire(`Bienvenido ${res.nombre} ${res.apellido}`)
                    .then(response=>{
                        console.log(response)
                        if(response.isConfirmed === true){
                            handleRedirect()
                        }
                    });
                    setDatosLogin(respuesta[0])
                    subirData(datosLogin)
                    // 
                } else {
                    Swal.fire({title:'El usuario o la contraseña no son correctos',icon:'warning'});
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        subirData()
    }, [datosLogin])

    const handleChange = (e) => {
        setCheck(!check)
    }

    const handleRedirect = () => {
        history.push('/peliculas')
    }

    const subirData = () => {
        if (check === true) {
            localStorage.setItem('datosSesion',JSON.stringify(datosLogin))
            sessionStorage.removeItem('datosSesion')            
        } else {
            sessionStorage.setItem('datosSesion',JSON.stringify(datosLogin))
            localStorage.removeItem('datosSesion')
        }
    }

    return (
        <div>
            <Contenedor>
            <LoginForm Login={Login} />
            <span>
                <label htmlFor="valSes">Manetener sesion iniciada</label>
                <input
                    type="checkbox"
                    name=""
                    id="valSes"
                    onChange={handleChange}
                />
            </span>

            <span>¿Aun no tienes una cuenta?, <Link to="/registro">Registrate</Link></span>
        </Contenedor>
        </div>
    )
}
