import React, { useState } from 'react'
import "../Styles/login.css";
import {TextField} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Axios from 'axios'
import Swal from 'sweetalert2'





export default function Login() {
    //aca se establece los datos que se tomaran del formulario
  const [correo,setCorreo]= useState('')
  const [contrasena,setContrasena]= useState('')

  const sesion=async(e)=>{

   e.preventDefault();
   const usuario={correo,contrasena}
   const respuesta = await Axios.post('api/usuario/login',usuario); //acá se envian a peticion
   console.log(respuesta)
   const mensaje= respuesta.data.mensaje

   if(mensaje!=='Bienvenido') {

     Swal.fire({
       icon:'error',
       title: mensaje,
       showConfirmButton: false,
       timer: 1500
     })

   }

   else {

    //aca se establece lo que se almacenara en el sesionstorage
     const token = respuesta.data.token
     const nombre = respuesta.data.nombre
     const usuario = respuesta.data.username
     const idUsuario= respuesta.data.id

     sessionStorage.setItem('token',token)
     sessionStorage.setItem('nombre',nombre)
     sessionStorage.setItem('usuario',usuario)
     sessionStorage.setItem('idUsuario',idUsuario)

     Swal.fire({
       icon:'success',
       title: mensaje,
       showConfirmButton: false,
       timer: 1500
     })

       window.location.href='/'
    }

  }

    return (
      <>

            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={sesion}>
                            <div>imagen aqui </div>
                            <div className="login__field">

                                <TextField id="standard-basic" onChange={(e) => setCorreo(e.target.value)} className="login__input" label="Correo:" variant="standard" />
                                {/* <input type="text"  placeholder="User name / Email"/> */}
                            </div>
                            <div className="login__field">
                                <i classNameName="login__icon fas fa- lock"></i>
                                <TextField id="standard-basic" type="password" onChange={(e) => setContrasena(e.target.value)} className="login__input" label="Contraseña:" variant="standard" />
                            </div>
                            <button className="button login__submit" type="submit">
                                <span className="button__text">Entrar</span>
                                <ArrowForwardIosIcon className="button__icon fas fa-chevron-right"></ArrowForwardIosIcon>
                            </button>
                        </form>

                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>


      </>
    );
  }

