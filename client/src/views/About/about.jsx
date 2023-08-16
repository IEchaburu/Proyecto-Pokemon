import MyImage from "../Img/yo-re-facha.png";
import "./about.module.css";


const About = () => {
  return (
    <div className="container">
      <h2>About Me</h2>
      <p className="name">¡Hola! Soy Iñaki Echaburu Dutren</p>
      <p className="description">Esta es mi humilde pagina</p>
      <div className="image-container">
        <img  src={MyImage} alt="Mi Imagen" className="rotating-image" />
      </div>
    </div>
  );
};

export default About;