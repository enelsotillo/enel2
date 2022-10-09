import Link from "next/link";
import style from "./login.module.css"
function login(){
    return(
        <div className={[style.contenedor_general_login]}>
            <h2>Login</h2>
            <section >
                <form>
                    <div className={style.login_input}>
                        <input type="text" name="ingreseIsuario" className="" placeholder="Ingrese usuario o correo"></input>
                    </div>
                    <div className={style.login_input}>
                        <input type="password" name="ingresePassword" className="" placeholder="Ingrese password"></input>
                     </div>
                     <div>
                         <button type="text" name="enviar" className=""> Enviar</button>
                    </div>
                    <div>
                        <p>no tiene cuenta, puede registrarse?</p>
                       <Link href="/blog/admin/resgisterUser">
                        <a>Registrar</a>
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    )
}
export default login;