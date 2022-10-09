import axios from "axios";
axios.post("localhost:8080/blog/", {
    "titulo": "mi primer blog",
    "autor": "enel",
    "id": 1235,
    "contenido": "Ucrenia"
})