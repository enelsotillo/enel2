import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import axios from "axios";
import Blog from "../components/mainLayoul/blog/blog";
export default function Home() {
  const [blog1, setListaBlog1] = useState([]);
  const [listaBlog, setListaBlog] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/blog/all?cantidad=1").then((response) => {
      setListaBlog(response.data);
      //console.log(response.data.categoria);
      //blog1=listaBlog.at(-4);
      //console.log(blog1);
    });
  }, []);
  //segunda useEffect
  useEffect(() => {
    axios.get("http://localhost:8080/blog/all?home=3").then((response) => {
      /*listaBlog=response.data;*/
      setListaBlog1(response.data);
      // console.log(response.data.categoria);
      //console.log(listaBlog.at(-4));
      //blog1=listaBlog.at(-4);
      //console.log(blog1);
    });
  }, []);
  return (
    <div>
      <h3>Inicio</h3>
      <div className={style.programacion_contenedor_principal}>
        {listaBlog.map((blog, index) => {
          return (
            <div className={style.articulos_local}>
              <Blog blog={blog}></Blog>
            </div>
          );
        })}
      </div>
      <h3> Sección</h3>
      <div className={style.programacion_contenedor_principal_Home}>
        {blog1.map((blogHome, index) => {
          return (
            <div className={style.articulos_local}>
              <Blog blog={blogHome}></Blog>
            </div>
          );
        })}
      </div>
      <p> para un prueba slice</p>
      <section
        className={style.programacion_contenedor_principal_Home}
      ></section>
    </div>
  );
}
