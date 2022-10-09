import Image from "next/image";
import Link from "next/link";
import { Children } from "react/cjs/react.production.min";
import style from "./mainLayoul.module.css"
function MainLayoul(props){
    return(
        <div>
           <header className={[style.MiCabezera]}>
            <p>  Esta es mi primera pagina web, información variada, programación, leyes y noticias</p>
            </header>
            <figure> 
                <Image src={"/images/logopapablock.png"} alt="logo" width={50} height={50}/>
                {/* <img src="C:\xampp\htdocs\BlockPapa\Img\logopapablock.png" width=50 class="nav-brand"> */}
                <figcaption> 
                Esta es la imagen del primer mensaje que tal te parese
                </figcaption> 
                </figure>
            <nav className={[style.menu]}>
                <ul>
                    <li>
                        <Link href="/"><a >Inicio</a></Link>
                    </li>             
                    <li>
                        <Link href="/programacion"><a>Programación</a></Link>
                    </li>
                    <li>
                        <Link href="/leyes/"><a>Leyes</a></Link>
                    </li>
                    <li>
                    <Link href="/noticias"><a>Noticias</a></Link>
                    </li>
                    <li>
                    <Link href="/contacto"><a>Contactos</a></Link>
                    </li>
                    <li>
                    <Link href="/admin"><a>Admin</a></Link>
                    </li>
                </ul>
            </nav>
            {props.children}
        </div>
    )
}
export default MainLayoul;
