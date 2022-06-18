import axios from "axios";
import Link from "next/link";
import {useRef} from "react";
import style from "./registerUser.module.css";
function RegisterUser(){
    const passUser=useRef()
    const usuarioUser=useRef()
    const nombreUser=useRef()
    const apellidoUser=useRef()
    const correoUser=useRef()
    const form=useRef()
    function enviarRegister(event){

        console.log(usuarioUser.current.value)
        console.log(nombreUser.current.value)
        console.log(apellidoUser.current.value)
        event.preventDefault()
        axios.post("http://localhost:8080/user/", {
                "pass": passUser.current.value,
                "usuario": usuarioUser.current.value,
                "nombre": nombreUser.current.value,
                "apellido": apellidoUser.current.value,
                "correo": correoUser.current.value
        }, {
            headers:{
                "Content-Type":"application/json",
                "Accept": "*/*",
            }
        })
        //miRegister.reset()
        form.current.reset()
    }
    /*function  limpiarFormulario(){
        document.getElementById("miRegister").reset()
    }*/
     
    return(
            <div className={[style.contenedorRegistrarUsuario]}>
                        <h3 className={[style.titulo_registrar]}>Registrar Usuario</h3>
                            <section className={[style.formulario_registrar]}>
                                <form ref={form} action="" method="" className={[style.register]} id="miRegister">
                                    <label>Usuario: </label>
                                    <input ref={usuarioUser}type="text" name="ingreseIsuario" className={[style.caja_texto]} placeholder="usuario o correo"></input>
                                    <p>Nombre: </p>
                                    <input ref={nombreUser}type="text" name="nombre" className={[style.caja_texto]}></input>
                                    <p>Apellido: </p>
                                    <input ref={apellidoUser}type="text" name="apellido" className={[style.caja_texto]}></input>
                                    <p>Correo:  </p>
                                    <input ref={correoUser}type="text" name="correo" className={[style.caja_texto]}></input>
                                    <p>Password: </p>
                                    <input ref={passUser}type="password" placeholder="password" className={[style.caja_texto]}></input>
                                    <button onClick={enviarRegister} type="text" name="enviar" className={[style.boton_enviar]}> Enviar</button>
                                    <p>si ya tiene cuenta?</p>
                                    <a><Link href="/Index.html">iniciar sesión </Link></a>
                                </form>
                            </section>    
                </div>
    )
}
export default RegisterUser;