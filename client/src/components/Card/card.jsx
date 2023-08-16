import { Link } from 'react-router-dom';
import style from "./card.module.css";


const Card = (props) => {
    return (
        <div className={style.container}>
            <img src={props.image} alt='Pokemon img' />
            <div>
                <Link to={`/detail/${props.id}`}>
                    <p className={style.name}>{props.name}</p>
                </Link>
                <p className={style.p}>{props.types}</p>
            </div>
        </div>
    )
}

export default Card;