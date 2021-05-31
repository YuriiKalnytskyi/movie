import "./OneMovie.css"
import {Link} from "react-router-dom";
export default function OneMovie ({item}) {
  return(
      <div className={'Films'}>
          <div className={'Films_info'}>
              <img className={'Film_img'} src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.id}/>
              <div>
                  <Link to={"/movie/"+item.id}><p>{item.title}</p></Link>
              </div>
          </div>
      </div>
  )
}