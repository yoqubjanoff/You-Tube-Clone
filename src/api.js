import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCT97gHYJedgGYOHDGuXm6YLr82QxcgdSQ",
  },
});


export default request