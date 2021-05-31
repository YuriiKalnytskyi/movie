import {useEffect, useState} from "react";
import {getMovieId, getMovieVideo} from "../../servis/app";
import "./MovieDetail.css"
import MovieVideo from "./MovieVideo";

export default function MovieDetail({item}) {
    let {match: {params: {id}}} = item
    let [movieDetail, setMovieDetail] = useState(null)
    let [movieDetailVideo, setMovieDetailVideo] = useState(null)

    useEffect(() => {
        getMovieId(id).then(value =>
            setMovieDetail(value.data)
        )

    }, [id])
    useEffect(()=>{
        getMovieVideo(id).then(value => setMovieDetailVideo(value.data.results))
    },[id])

    console.log(movieDetail)
    return (

        movieDetail && <div >
            {
                <div className={"container"} style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`
                }}>
                    <div className={"detail_img"}>
                        <img src={"http://image.tmdb.org/t/p/w300" + movieDetail.poster_path} alt=""/>
                    </div>
                    <div className={"detail_info"}>
                        <div>
                            {<h1>{movieDetail.title}</h1>}
                            {<h3>{movieDetail.release_date}</h3>}
                        </div>
                        <div>
                            <ul>Жанри:
                                   {
                                    movieDetail.genres.map(value => {
                                        return <samp key={value.id}>
                                            <li>{value.name}</li>
                                        </samp>
                                    })
                                     }

                            </ul>
                        </div>
                        <div>
                            Популярність:  {movieDetail.popularity}<br/>
                           Тривалість: {movieDetail.runtime}
                        </div>
                        <div>Оцинка:   {movieDetail.vote_average}</div>
                        <div>Короткий опис :  {movieDetail.overview}</div>
                    </div>

                </div>
            }
            <br/>
            {
                movieDetailVideo&&(movieDetailVideo.map((value)=>{
                    return <div><MovieVideo item={value}/><br/></div>


                }))
            }

        </div>
    )
}