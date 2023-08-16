import Card from "../Card/card";
import style from "./cards.module.css"

const Cards = ({ pokemons }) => {
    return (
        <div className={style.container}>
            {
                pokemons?.map((pokemon) => {
                    return (
                        <Card
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            img={pokemon.image}
                            types={pokemon.types.join("-")}
                        />
                    )
                })
            }
        </div>
    )
};

export default Cards;