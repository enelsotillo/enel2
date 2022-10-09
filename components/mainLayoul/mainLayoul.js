import Image from "next/image";
import Link from "next/link";
import { Children } from "react/cjs/react.production.min";
import style from "./mainLayoul.module.css";
function MainLayoul(props) {
  return (
    <div>
      <section className={style.principal}>
        <figure className={style.logo_texto}>
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
            <h2 className={style.titulo_principal_encabezado}>
            Información variada, programación, leyes y noticias
            para la cumunidad Venezolana.
            </h2>
        </header>
        <aside className={style.aside}>
          <div className={style.button_inicia_sesion}>
            <a className="boton_init_sesion" href="admin/blog/login">
              Log in
            </a>
          </div><br/>
          <div className={style.button_register_user}>
            <a className="register_user" href="admin/blog/registerUser">
              Register
            </a>
          </div><br/>
        </aside>
      </section>
      <nav className={style.menu}>
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
      <div className="container-barra-social">
        <div className="icon-social">
          <header>
          <link href="https://file.myfontastic.com/DaqmoohyDSTZWKFDh6L4Go/icons.css" rel="stylesheet"/>
          </header>
          <div className={style.containetBar}> 
            <ul>
              <li>
                <div><a href="" className="icon-share"></a></div>
                <div className={style.iconfacebook}><a href="" className="icon-facebook"></a></div>
                <div className={style.iconinstagram}><a href="" className="icon-instagram"></a></div>
                <div className={style.iconwhatsapp}><a href="" className="icon-whatsapp"></a></div>
                <div className={style.iconyoutube}><a href="" className="icon-youtube"></a></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {props.children}
      <footer className={style.columna}>
        Todos los derechos revervado $copy NDF1210B-2022 & 2025
        <p dateTime="10/02/2022">publicación 10/02/2022</p>
      </footer>
    </div>
  );}
export default MainLayoul;
