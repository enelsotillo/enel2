import Image from "next/image";
import { useState } from "react";
import style from "../styles/Home.module.css"
export default function Home() {
    const [nombre, cambiarNombre] = useState("enel")
    let titulo = "Universo Oculto"
    function actualizaInput() {
        /*console.log("Funciona");
        cambiarNombre("Jose Carpio")
        console.log(nombre)*/

    }
    return (
        <div>
            <section>
                <article>
                    <header>
                        <hgroup>
                            <h1 className={[style.MiTitulo]}>
                                Titulo: Java lenguaje de programación de multiplataforma
                            </h1>
                            <h2>
                                Subtitulo del primer lanzamiento
                            </h2>
                        </hgroup>
                    </header>
                   
                    <p> Java es un lenguaje de programación, orientado a objetos que fue diseñado específicamente para tener dependencias de implementación como fuera posible.Su intención es permitir que los desarrolladores de aplicaciones escriban el programa una vez y lo ejecuten en cualquier dispositivo

                        Java es uno de los lenguajes de programación más populares del mundo.Es un lenguaje orientado a objetos, potente, versátil y mutiplataforma (corre en cualquier sistema operativo moderno). Además puedes obtener Java y gran cantidad de herramientas para trabajar con él de forma gratuita, siendo la mayor parte de su código libre y abierto.</p>
                        <Image src={"/Java.jpg"} alt="java" width={300} height={200} className="Java"/>
                   
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
            <footer className="columna"> Todos los derechos revervado $copy NDF1210B-2022 & 2025
             <p dateTime="10/02/2022" >publicación 10/02/2022</p >
                {/* </aside> */}
            </footer>
        </div>
    )
}
