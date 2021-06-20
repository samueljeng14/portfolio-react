import './AlbumCover.css';
import {Link} from "react-router-dom";

export function AlbumCover(props){
  return(
      <div className="AlbumCover">
        <Link to={props.routeUrl}>
          <img src={props.src} alt="" />
          <h5>{props.title}</h5>
          <h5>{props.subTitle}</h5>
        </Link>
      </div>
  );
}