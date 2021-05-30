import axios from "axios";

let options = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODhiYjBkZTYxMmM2MDdmNjFlMDQ2NTlhMmNkMmYwNCIsInN1YiI6IjYwYTQyMjcwMzI1YTUxMDA3NzRkNzlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X6SOQDLWh_lznZDPlf-PLbCbdoPssJXNkt7OxRekb1Q'
    }
}
let axiosInstance = axios.create(options);

const API_KEY = "?api_key=288bb0de612c607f61e04659a2cd2f04&language=uk"


const getMovie = (page)=>{
    return axiosInstance.get('/discover/movie'+API_KEY+'&page='+page)

}

export {
    getMovie
}


// const link={
//     movie:'/discover/movie'
// }
//
// export const getMovie = async (params) => {
//     const  {data}=await axiosInstance.get(`${link.movie}`, {
//        params
//     })
//     return data;
// }




