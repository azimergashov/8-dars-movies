import { Link } from "react-router-dom";
import "./card.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";


export const Card = ({ title, time, img, id }) => {
  const {setId} = useAuth()
    const navigate = useNavigate()

    const RouteSinglePage = () =>{
      navigate("/single")
      setId(id)
    }

  return (
    <li className="card__item">
      <Link  className="text-decoration-none" onClick={RouteSinglePage} to={`/single`}>
        <img
          className="card__img"
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt="title"
          width={300}
          height={300}
        />

        <div className="card__bottom">
          <h2 className="text-light">{title}</h2>
          <p className="text-light">{time}</p>
          <p></p>
        </div>
      </Link>
    </li>
  );
};
