import Link from "next/link";
import style from "./leyes.module.css";
function Leyes() {
  return (
    <div>
      <h2>Hola hay Leyes</h2>
        <dev className={style.trabajo_contenedor}>
            <section className="Trabajo1">
                <p>Leyes del Trabajo</p>
                <article>
                <a><img src="/images/lottt.jpg" alt="LOTTT" width={250} height={300}/>
                <Link href="Leyes/Trabajo/B_Ley Orgánica del Trabajo">
                    Ley Organica del Trabajo
                </Link></a>
                </article>
            </section>
            <section className="Trabajo2">
                <p>Leyes del Trabajo</p>
                <article>
                <a><img src="/images/Reglomento_lottt.jpg" alt="LOTTT" width={250} height={300}/>
                <Link href="Leyes/Trabajo/D_Reglamento Ley Orgánica del Trabajo">
                    Reglamento del Trabajo
                </Link></a>
                </article>
            </section>
            <section className="Trabajo3">
                <p>Leyes del Trabajo</p>
                <article>
                <a><img src="/images/Reglomento_lottt.jpg" alt="LOTTT" width={250} height={300}/>
                <Link href="Leyes/Trabajo/D_Reglamento Ley Orgánica del Trabajo">
                    Reglamento Parcial del Trabajo
                </Link></a>
                </article>
            </section>
            <section className="Trabajo4">
                <p>Leyes del Trabajo</p>
                <article>
                <a><img src="/images/ley_procesal.jpg" alt="LOTTT" width={250} height={300}/>
                <Link href="Leyes/Trabajo/B_Ley Orgánica Procesal del Trabajo">
                    Ley Procesal del Trabajo
                </Link></a>
                </article>
            </section>
        </dev>
    </div>
  );
}
export default Leyes;
