import Image from "next/image";
import Link from "next/link";
import { Children } from "react/cjs/react.production.min";
import style from "./mainLayoul.module.css";
function MainLayoul(props) {
  return (
    <div>
      <section className={style.principal}>
        <figure >
          <img
            src={"/images/logopapablock.png"}
            alt="logo"
            width={60}
            height={60}
          />
          {/* <img src="C:\xampp\htdocs\BlockPapa\Img\logopapablock.png" width=50 class="nav-brand"> */}
          <figcaption>
            Esta es la imagen del primer mensaje que tal te parese
          </figcaption>
        </figure>
        <header>
          <p>
            <h3>
            {" "}
            Información variada, programación, leyes y noticias
            para la cumunidad Venezolana.
            </h3>
          </p>
        </header>
        <aside className={[style.aside]}>
          <div class={[style.button_inicia_sesion]}>
            <a className="boton_init_sesion" href="admin/blog/login">
              Log in
            </a>
          </div><br/>
          <div class={[style.button_register_user]}>
            <a className="register_user" href="admin/blog/registerUser">
              Register
            </a>
          </div><br/>
        </aside>
      </section>
      <nav className={[style.menu]}>
        <ul>
          <li>
            <Link href="/">
              <a className={style.nvoMenu}>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/programacion">
              <a className={style.nvoMenu}>Programación</a>
            </Link>
          </li>
          <li>
            <Link href="/leyes/">
              <a className={style.nvoMenu}>Leyes</a>
            </Link>
          </li>
          <li>
            <Link href="/noticias">
              <a className={style.nvoMenu}>Noticias</a>
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              <a className={style.nvoMenu}>Contactos</a>
            </Link>
          </li>
          <li>
            <div className={style.nvoMenu}>
              <details>
                <summary>Admin</summary>
                <div className={style.subMenu} id="submenu">
                  <Link href="/admin/blog/nuevoBlog">
                    <a>Nuevo Blog</a>
                  </Link>
                  <br />
                  <Link href="/admin">
                    <a>Dashboard</a>
                  </Link>
                </div>
              </details>
            </div>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
export default MainLayoul;
