import Link from "next/link";
import style from "./registerUser.module.css"
function RegisterUser(){
    return(
            <div className={[style.contenedorRegistrarUsuario]}>
                        <h3 className={[style.titulo_registrar]}>Registrar Usuario</h3>
                            <div className={[style.formulario_registrar]}>
                                <form action="" method="" className={[style.register]}>
                                    <p>Usuario: </p>
                                    <input type="text" name="ingreseIsuario" className={[style.caja_texto]} placeholder="usuario o correo"></input>
                                    <p>Nombre: </p>
                                    <input type="text" name="nombre" className={[style.caja_texto]}></input>
                                    <p>Apellido: </p>
                                    <input type="text" name="apellido" className={[style.caja_texto]}></input>
                                    <p>Correo:  </p>
                                    <input type="text" name="correo" className={[style.caja_texto]}></input>
                                    <p>Password: </p>
                                    <input type="password" placeholder="password" className={[style.caja_texto]}></input>
                                    <button type="text" name="enviar" className={[style.boton_enviar]}> Enviar</button>
                                    <p>si ya tiene cuenta?</p>
                                    <a><Link href="/Index.html">iniciar sesión </Link></a>
                                </form>
                            </div>    
                </div>
    )
}

export default RegisterUser;