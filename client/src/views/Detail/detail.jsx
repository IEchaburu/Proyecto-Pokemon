import { useEffect } from "react";
import { getPokemonID } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";



const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.byId);

    useEffect(() => {
        dispatch(getPokemonID(id));
    },[dispatch, id]);

    if (!pokemon) {
        return <div className={style.loading}>Loading...</div>; 
    }


    return (
        <div className={style.general}>
        <div className={style.containerdata}>
          <p className={style.id}> {pokemon?.id}</p>
          <p className={style.titulo}> {pokemon?.types.join('-')}</p>
          <p className={style.titulo}> {pokemon?.name}</p>
        </div>
        <div className={style.container}>
          <img src={pokemon.image} alt="pokemon" className={style.image} />
          <div className={style.containerStats}>
            <p className={style.titulo}>STATS </p>
            <p className={style.stats}>Health: {pokemon.health}</p>
            <p className={style.stats}>Attack: {pokemon.attack}</p>
            <p className={style.stats}>Defense: {pokemon.defense}</p>
            <p className={style.stats}>Speed: {pokemon?.speed}</p>
            <p className={style.stats}>Height: {pokemon?.height}</p>
            <p className={style.stats}>weight: {pokemon?.weight}</p>
          </div>
        </div>
      </div>
    )
};

export default Detail;
