import axios from "axios"
export default {
    getBooks:(query)=>{
        return axios.post("http://localhost:3000/api/getbookst",query)
    },
    saveBook:(book)=>{
        return axios.post("http://localhost:3000/api/saveBook",book)
    },
    savedBooks:()=>{
        return axios.get("http://localhost:3000/api/saved")
    }
}