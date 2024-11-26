import axios from "axios"
const instance = axios.create(
    {
        // The baseURL for all movies 
        baseURL: "https://api.themoviedb.org/3"
    }
)
export default instance 