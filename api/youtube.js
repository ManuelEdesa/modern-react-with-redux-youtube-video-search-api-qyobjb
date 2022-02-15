import axios from "axios";

const KEY = 'AIzaSyBS2OE65llWg0UZs-Ug9JgkacXHZAbzz5M';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }

})