import style from "./programacion.module.css";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Blog from "../../components/mainLayoul/blog/blog";
function Programacion() {
  /*let listaBlog =[];*/
  const [listaBlog, setListaBlog] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/blog/all?categoria=programacion")
        .then((response) => {
        console.log(response.data.categoria == "programacion");
        /*listaBlog=response.data;*/
        setListaBlog(response.data);
      });
  }, []);
  return (
    <div>
      <h3>Programación</h3>
      <section className={style.programacion_contenedor_principal_Home}>
        {listaBlog.map((blog, index) => {
            return  <div className={style.articulos_local}>
                      <div>
                       <Blog blog={blog}></Blog>
                       </div>
                    </div>;
        })}
      </section>
    </div>
  );
}
export default Programacion;
