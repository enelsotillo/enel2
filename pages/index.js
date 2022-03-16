import Image from "next/image";
import { useState } from "react";
import style from "../styles/Home.module.css"
export default function Home() {
  const [nombre, cambiarNombre]=useState("enel")
  let titulo="Universo Oculto"
  function actualizaInput(){
    console.log("Funciona");
    cambiarNombre("Jose Carpio")
    console.log(nombre)
    
  }
  return (
    <div>
      <div>
        
        <section>
            <article>
                <header>
                    <hgroup>
                        <h1 className={[style.MiTitulo]}>
                            Titulo del primer lanzamiento
                        </h1>
                            <h2>
                            Subtitulo del primer lanzamiento
                            </h2>
                    </hgroup>
                </header>
                Primer lanzamiento mensaje
                <footer>
                    <p>comentario (0)</p>
                </footer>
            </article>
        </section>
        <section>
            <article>
                <header> 
                    <hgroup>
                        <h1>
                            Titulo del Segundo lanzamiento
                        </h1>
                            <h2>
                                Subtitulo del Segundo lanzamiento
                            </h2>
                    </hgroup>
                </header>
                Segundo lanzamiento mensaje
                <footer>
                    <p>comentario (0)</p>
                </footer>
            </article>
        </section>
        {/* <aside id="columna"> */}
        <blockquote>1 Texto de Entretenimiento</blockquote>
        <blockquote>2 Texto de Deportes</blockquote>
        <footer id="columna"> Todos los derechos revervado $copy NDF1210B-2022 & 2025
            <time datetime="10-02-2022" pubdate>publicación 10-02-2022</time>
        {/* </aside> */}
        </footer>
    </div>
    </div>
  )
}
