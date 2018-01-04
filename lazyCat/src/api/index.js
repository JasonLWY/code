import axios from "axios"

export const getIndex = () =>{
  const url = "/api/Home/homepageV3"
  return axios.get(`${url}`)
}
