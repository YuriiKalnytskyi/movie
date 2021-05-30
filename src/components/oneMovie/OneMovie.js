import "./OneMovie.css"
export default function OneMovie ({item}) {
  return(
      <div className={'Films'}>
          <div className={'Films_info'}>
              <img className={'Film_img'} src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.id}/>
              <p>{item.title}</p>
          </div>
      </div>
  )
}