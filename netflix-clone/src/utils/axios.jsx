import axios from "axios"
// The axios.create method is used to create an instance with a specific configuration.
const instance = axios.create({
  // the base URL for The Movie Database (TMDB) API.
  baseURL: "https://api.themoviedb.org/3",
});
export default instance 