import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "../../components/mainLayoul/blog/blog";
function Noticias() {
  /*let listaBlog =[];*/
  const [listaBlog, setListaBlog] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/blog/all").then((response) => {
      console.log(response);
      /*listaBlog=response.data;*/
      setListaBlog(response.data);
    });
  }, []);
  return (
    <div>
      <p>Noticias</p>
      {listaBlog.map((blog, index) => {
        return <Blog blog={blog}></Blog>;
      })}
    </div>
  );
}
export default Noticias;
