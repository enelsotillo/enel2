import "./style.css";
import { savePost, loadPosts } from "./models/post";
import { async } from "@firebase/util";
import { uploadImage, getImageURL } from "./storage";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

//evento que carga los datos con la pagina vista frond tipo lista
window.addEventListener("DOMContentLoaded", async () => {
  const posts = await loadPosts();
  const postsList = document.getElementById("posts");
  posts.forEach((post) => {
    postsList.innerHTML += `
    <li>
      ${post.content}
       <img src="${post.image ? post.image : '' }" alta="" style="width: 3rem"></img>
    </li>`;
  });
});

//captura los datos del formulario
const postForm = document.getElementById("postForm");
postForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // captura el imagen
  const inputFile = document.getElementById("image");
  let post = {
    content:postForm['content'].value,
  }
  if (inputFile.files[0]) {
    console.log(inputFile.files[0]);
    const result = await uploadImage(inputFile.files[0]);
    const url = await getImageURL(result.ref);
    post.image = url;
  }

  savePost(post);
  //console.log(postForm["content"].value);
});
//captura datos de form
/* 
postForm.addEventListener("submit", e => {
  e.preventDefault();
  enviar(postForm['content'].value);
  console.log(postForm['content'].value);
})
*/
const googleLogin = document.getElementById("googleLogin");

googleLogin.addEventListener("click", async () => {
  console.log('googleLogin');
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log(result);
});
