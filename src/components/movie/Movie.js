import {useEffect, useState} from "react";
import {getMovie} from "../../servis/app";
import OneMovie from "../oneMovie/OneMovie";
import "./Movie.css"

export default function Movie() {
    let [movie, setMovie] = useState([])
    let [pege, setPage] = useState(1)
    let [pageMax, setPagesMax] = useState(null)


    useEffect(() => {

        getMovie(pege).then(value => {
            console.log(value)
            setMovie([...value.data.results])
            setPagesMax(value.data.total_pages)
        })
    }, [pege])


    const next = () => {
        if (pege < pageMax) {
            setPage(++pege)
        }
    }
    const back = () => {
        if (pege > 1) {
            setPage(--pege)
        }
    }
    const first = () => {
        setPage(pege = 1)
    }
    const last = () => {
        setPage(pageMax)
    }


    return (
        <div className={"film"}>
            <div className={"filmContainer"}>
                {
                    movie.map((value, index) =>
                        <OneMovie key={index}
                                  item={value}/>)
                }

            </div>
            <div className={"Btn"}>
                <button className={"btn"} onClick={first}>first</button>
                <button className={"btn"} onClick={back}>back</button>
                <samp>  {pege}   </samp>
                <button className={"btn"} onClick={next}>next</button>
                <button className={"btn"} onClick={last}>last</button>
            </div>
        </div>

    )
}