import axios from 'axios'
const URL=`http://localhost:8080`
export const uploadFile=async(data)=>{
    try {
        const response=await axios.post(`${URL}/upload`,data)
        return response.data;
    } catch (error) {
        console.error(`Error while calling the api`,error.message)
    }
}