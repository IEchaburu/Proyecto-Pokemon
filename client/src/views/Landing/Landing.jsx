import { Link } from 'react-router-dom';
import style from "./landing.module.css";


const Landing = () => {
  return (
    <div className={style.generalContainer}>
        <div className={style.container}>
            <h1>Welome to the Pokemon SPA</h1>
            <Link to ='/home'className={style.button}>Home!</Link>
        </div>
    </div>
  );
};

export default Landing;





