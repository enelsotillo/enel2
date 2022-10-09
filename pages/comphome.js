import axios from "axios";
import Blog from "../components/mainLayoul/blog/blog";
import {useEffect, useState} from react;
function complementosHome(){
let [combloghome, setComBlogHome]=useState([]);
useEffect(() => {
    axios.get("http://localhost:8080/blog/all?cantidad=4").then ((response) =>{
        console.log(response.data);
    })
},[]);
    return(
        <div>
         <p>Listas de blog solo para 3</p>;
         {combloghome.map((lista3, index) => {
          return (
      <div >
        <Blog blog={lista3}></Blog>
        </div>
         );
        })}
        </div>
    );
}
export default complementosHome;