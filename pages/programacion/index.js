function Programacion() {
    return (
        <div className="encabezado"><p>Programacion</p>
            <div className="contener">
                <section className="contener_1">
                        <img src={"images/historia.jpg"} alt="historia de la programación" width={200} height={150} />
                            <h1>Historia de la Programación</h1>
                            <p>la programación en lenguaje maquina resulta
                            muy lenta y tediosa, pues los datos e instrucciones se
                            deben introducir en sistema binario y, además, obliga a
                            conocer las posiciones de memoria donde se almacenan los datos. Como puede imaginar, este tipo de programaciÛn conlleva gran n˙mero de errores y la tarea
                            de depuración exige bastante tiempo y dedicación.
                            Por este motivo, a principios de los 50 se creó una
                            notación simbólica, denominada codigo de ensamblaje
                            (ASSEMBLY), que utiliza una serie de abreviaturas
                            mnemotÈcnicas para representar las operaciones (figura
                            1): ADD (sumar), STORE (copiar), etc.. Al principio, la
                            traducción del codigo de ensamblaje al cÛdigo m·quina se realizaba manualmente, pero enseguida se vio
                            que el ordenador tambiÈn podÌa encargarse de esa traducciÛn; se desarrollÛ asi un programa traductor, llamado ensamblador1 (ASSEMBLER).
                        </p>    
                </section>
                <section className="contener_2">
                    <img src={"images/binario.jpg"} alt="historia de la programación" width={200} height={150} />
                    <p>
                        
                        Conforme los ordenadores fueron introduciÈndose
                        en el mundo empresarial y acadÈmico, aquellos primitivos lenguajes fueron sustituidos por otros m·s sencillos
                        de aprender y m·s cÛmodos de emplear. Estos lenguajes, llamados de alto nivel, tienen una estructura que se
                        adapta m·s al pensamiento humano que a la forma de
                        trabajar del ordenador. Por ejemplo, seguro que le suenan lenguajes como BASIC, PASCAL, C, etc.
                        <br />
                        El equivalente inform·tico de esta modalidad de
                        traductor se denomina compilador2. Observe que, en
                        contraste con el intÈrprete, que traduce las instrucciones una a una, el compilador traduce todo el programa
                        de golpe, dej·ndolo listo para ser ejecutado3. De esta
                        forma, se logra mayor rapidez en la ejecuciÛn y, adem·s, se liberan recursos de la memoria, pues el programa, una vez compilado, no exige que el traductor estÈ
                        residente en memoria, como sucede con los intÈrpretes. Por ejemplo, entre los lenguajes que siempre son
                        compilados se pueden destacar PASCAL, FORTRAN,
                        COBOL, etc.
                    </p>
                </section>
                <section className="contener_3">
                    <h2>FORTRAN</h2>
                    Al comienzo de la dÈcada de los 50, John Backus
                    estaba trabajando con SSEC (Selective Sequence Electronic Calculator), uno de los primeros ordenadores de
                    IBM, y desarrollÛ el programa SPEEDCODING para Èl.
                    Tomando Èste como base, se emprendiÛ, en otoÒo de
                    1954, la creaciÛn de un lenguaje para aÒadirle m·s
                    prestaciones al modelo IBM 704, que iba a salir pronto
                    al mercado.
                    <br />
                    En 1956 se terminÛ el compilador FORTRAN
                    (FORmula TRANslator) y se incluyÛ en el IBM 704,
                    junto con un manual de 51 paginas

                </section>
            </div>
        </div>
    )
}
export default Programacion;