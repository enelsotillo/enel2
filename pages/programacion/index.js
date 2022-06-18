import style from "./Programacion.module.css";
import Image from "next/image";
function Programacion() {
  return (
    <div>
      <p>Programación</p>
      <div className={style.programacion_contenedor_principal}>
        <section className="contener_1">
          <img
            src={"images/historia.jpg"}
            alt="historia de la programación"
            width={200}
            height={150}
          />
          <h1>Historia de la Programación</h1>
          <p>
            la programación en lenguaje maquina resulta muy lenta y tediosa,
            pues los datos e instrucciones se deben introducir en sistema
            binario y, además, obliga a conocer las posiciones de memoria donde
            se almacenan los datos. Como puede imaginar, este tipo de
            programaciÛn conlleva gran n˙mero de errores y la tarea de
            depuración exige bastante tiempo y dedicación. Por este motivo, a
            principios de los 50 se creó una notación simbólica, denominada
            codigo de ensamblaje (ASSEMBLY), que utiliza una serie de
            abreviaturas mnemotÈcnicas para representar las operaciones (figura
            1): ADD (sumar), STORE (copiar), etc.. Al principio, la traducción
            del codigo de ensamblaje al cÛdigo m·quina se realizaba manualmente,
            pero enseguida se vio que el ordenador tambiÈn podÌa encargarse de
            esa traducciÛn; se desarrollÛ asi un programa traductor, llamado
            ensamblador1 (ASSEMBLER).
          </p>
        </section>
        <section className="contener_2">
          <img
            src={"images/binario.jpg"}
            alt="historia de la programación"
            width={200}
            height={150}
          />
          <p>
            Conforme los ordenadores fueron introduciéndose en el mundo
            empresarial y académico, aquellos primitivos lenguajes fueron
            sustituidos por otros mas sencillos de aprender y mas comodos de
            emplear. Estos lenguajes, llamados de alto nivel, tienen una
            estructura que se adapta mas al pensamiento humano que a la forma de
            trabajar del ordenador. Por ejemplo, seguro que le suenan lenguajes
            como BASIC, PASCAL, C, etc.
            <br />
            El equivalente informatico de esta modalidad de traductor se
            denomina compilador. Observe que, en contraste con el interprete,
            que traduce las instrucciones una a una, el compilador traduce todo
            el programa de golpe, dejandolo listo para ser ejecutado. De esta
            forma, se logra mayor rapidez en la ejecución y, ademas, se liberan
            recursos de la memoria, pues el programa, una vez compilado, no
            exige que el traductor estÈ residente en memoria, como sucede con
            los intÈrpretes. Por ejemplo, entre los lenguajes que siempre son
            compilados se pueden destacar PASCAL, FORTRAN, COBOL, etc.
          </p>
        </section>
        <section className="contener_3">
          <h2>FORTRAN</h2>
          Al comienzo de la década de los 50, John Backus estaba trabajando con
          SSEC (Selective Sequence Electronic Calculator), uno de los primeros
          ordenadores de IBM, y desarrollÛ el programa SPEEDCODING para Èl.
          Tomando Éste como base, se emprendió, en otoño de 1954, la creación de
          un lenguaje para añadirle mas prestaciones al modelo IBM 704, que iba
          a salir pronto al mercado.
          <br />
          En 1956 se termino el compilador FORTRAN (FORmula TRANslator) y se
          incluyÛ en el IBM 704, junto con un manual de 51 paginas
        </section>
        <section className="contener_4">
          <Image
            src={"/Java.jpg"}
            alt="java"
            width={300}
            height={150}
            className="Java"
          />
          <h2>JAVA</h2>
          Desde J2SE 1.4, la evolución del lenguaje ha sido regulada por el JCP
          (Java Community Process), que usa Java Specification Requests (JSRs)
          para proponer y especificar cambios en la plataforma Java. El lenguaje
          en sí mismo está especificado en la Java Language Specification (JLS),
          o Especificación del Lenguaje Java. Los cambios en los JLS son
          gestionados en JSR 901. JDK 1.0 (23 de enero de 1996) — Primer
          lanzamiento: comunicado de prensa JDK 1.1 (19 de febrero de 1997) —
          Principales adiciones incluidas: comunicado de prensa una
          reestructuración intensiva del modelo de eventos AWT (Abstract
          Windowing Toolkit) clases internas (inner classes) JavaBeans JDBC
          (Java Database Connectivity), para la integración de bases de datos
          RMI (Remote Method Invocation)
        </section>
      </div>
    </div>
  );
}
export default Programacion;
