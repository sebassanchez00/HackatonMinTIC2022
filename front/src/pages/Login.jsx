import React from 'react';
import "../Styles/login.css";
import {TextField} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';






function Login() {
    return (
      <>
        
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div>imagen aqui </div>
                            <div className="login__field">
                                
                                <TextField id="standard-basic" className="login__input" label="Correo:" variant="standard" />
                                {/* <input type="text"  placeholder="User name / Email"/> */}
                            </div>
                            <div className="login__field">
                                <i classNameName="login__icon fas fa-lock"></i>
                                <TextField id="standard-basic" className="login__input" label="Contraseña:" variant="standard" />
                            </div>
                            <button className="button login__submit">
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
  export default Login;
