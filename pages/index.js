import Image from "next/image";
import { useState } from "react";
import style from "../styles/Home.module.css";
export default function Home() {
  const [nombre, cambiarNombre] = useState("enel");
  let titulo = "Universo Oculto";
  function actualizaInput() {
    /*console.log("Funciona");
        cambiarNombre("Jose Carpio")
        console.log(nombre)*/
  }
  return (
    <div>
      <section className="inicio">
        <article>
          <header>
            <hgroup>
              <h1>Titulo: Java lenguaje de programación de multiplataforma</h1><br/>
            </hgroup>
          </header>

          <Image
            src={"/Java.jpg"}
            alt="java"
            width={600}
            height={300}
            className="Java"
          />
          <p className={style.inicio}>
            {" "}
            Java es un lenguaje de programación, orientado a objetos que fue
            diseñado específicamente para tener dependencias de implementación
            como fuera posible.Su intención es permitir que los desarrolladores
            de aplicaciones escriban el programa una vez y lo ejecuten en
            cualquier dispositivo Java es uno de los lenguajes de programación
            más populares del mundo.Es un lenguaje orientado a objetos, potente,
            versátil y mutiplataforma (corre en cualquier sistema operativo
            moderno). Además puedes obtener Java y gran cantidad de herramientas
            para trabajar con él de forma gratuita, siendo la mayor parte de su
            código libre y abierto.
          </p>
          <footer>
            <p>Seccion Principal (0)</p>
          </footer>
        </article>
      </section>
      <br/>
      <br/>
      {/* <aside id="columna"> */}
      <div className={style.grid}>
        <section>
          <article>
            <header>
              <hgroup>
                <h1>
                  Presidenciales colombianas, nueva
                  encuesta amplía ventaja de Hernández sobre Petro
                </h1>
              </hgroup>
            </header>
            <Image
              src={"/lapatilla.jpg"}
              alt="java"
              width={600}
              height={300}
              className="Java"
            />
            <p>
              {" "}
              A dos semanas de que se realice la segunda vuelta presidencial,
              una nueva encuesta de intención de voto arrojó que el candidato de
              la Liga de Gobernantes Anticorrupción, Rodolfo Hernández, lidera
              las preferencias de los ciudadanos con un 46,4 por ciento,
              mientras que el aspirante del Pacto Histórico, Gustavo Petro,
              tiene un 43,3 por ciento de la inclinación electoral, así lo
              reseñó EL TIEMPO.
            </p>
            <footer>
              <p>Seccion Noticias (0)</p>
            </footer>
          </article>
        </section>
        <section className="grid">
          <article>
            <header>
              <hgroup>
                <h1>Los entornos de desarrollo Java</h1> <br/>
              </hgroup>
            </header>
            <Image
              src={"/entorno.jpg"}
              alt="java"
              width={600}
              height={300}
              className="Java"
            />
            <p>
              {" "}
              El requisito para ejecutar dicha aplicación es que "descargues
              Java", es decir un agregado externo al navegador (en inglés,
              "plugin") que lo permita. Para formalizar un poco las cosas, lo
              que un usuario promedio hace para correr programas en Java es
              descargar la JRE, de "Java Runtime Environment" (entorno de
              ejecución de Java). Este entorno incluye los componentes mínimos
              necesarios para ejecutar programas desarrollados en Java, donde,
              entre otras utilidades, se encuentra la JVM, de "Java Virtual
              Machine" (máquina virtual de Java).
            </p>
            <footer>
              <p>Seccion Programacion (0)</p>
            </footer>
          </article>
        </section>
        <section className="grid">
          <article>
            <header>
              <hgroup>
                <h1>Ley Organica Procesal del Trabajo Venezuela</h1><br/>
              </hgroup>
            </header>
            <Image
              src={"/leyes.jpg"}
              alt="java"
              width={600}
              height={300}
              className="Java"
            />
            <p>
              {" "}
              Artículo 1. La presente Ley garantizará la protección de los
              trabajadores en los términos previstos en la Constitución de la
              República Bolivariana de Venezuela y las leyes, así como el
              funcionamiento, para trabajadores y empleadores, de una
              <br />
              jurisdicción laboral autónoma, imparcial y especializada.
              Parágrafo Único: La designación de personas en masculino, tiene en
              las disposiciones de esta Ley, un sentido genérico, referido
              siempre, por igual, a hombres y mujeres.
            </p>
            <footer>
              <p>Seccion Leyes (0)</p>
            </footer>
          </article>
        </section>
      </div>
      <br/>
      <br/>
      
      {/* <aside id="columna"> */}
      <footer className="columna">
        {" "}
        Todos los derechos revervado $copy NDF1210B-2022 & 2025
        <p dateTime="10/02/2022">publicación 10/02/2022</p>
        {/* </aside> */}
      </footer>
    </div>
  );
}
