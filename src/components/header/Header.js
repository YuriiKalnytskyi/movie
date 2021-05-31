import "./Header.css"
import {Link} from "react-router-dom";

export default function Header () {
  return(
      <div className={"header"}>
          <ul className={"ul"}>
              <li className={"li"}>
                  <Link to={'/'}>Home</Link>
              </li>
              <li className={"li"}>
                  <Link to={"/movie"}>Movie</Link>
              </li>
          </ul>

      </div>
  )
}