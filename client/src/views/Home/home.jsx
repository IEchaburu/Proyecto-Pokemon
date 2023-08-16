import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./home.module.css"
import Filter from "../../components/Filter/filter";
import Cards from "../../components/Cards/cards";
import Pagination from "../Pagination/pagination";
import { getTypes, getAllPokemons } from "../../redux/actions";

const Home =() => {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
  
    const [currentPage, setCurrentPage] = useState(1);
    const pkPerPage = 12; 
    console.log(currentPage, 'esto es cp');
  
    useEffect(() => {
      dispatch(getTypes());
      dispatch(getAllPokemons());
    }, [dispatch]);
  
    const indexOfLastPoke = currentPage * pkPerPage;
    const indexOfFirstPoke = indexOfLastPoke - pkPerPage;
    const currentPoke = allPokemons.slice(indexOfFirstPoke, indexOfLastPoke);
  
    const totalPages = Math.ceil(allPokemons.length / pkPerPage);
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
  
    const onPageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
          setCurrentPage(pageNumber);
        }
      };
    
      const handlePrev = () => {
        onPageChange(currentPage - 1);
      };
      
      const handleNext = () => {
        onPageChange(currentPage + 1);
      };

    const handlerPage = (event) => {
        event.preventDefault()
        setCurrentPage(1);
    }

    // if (!allPokemons) {
    //     return <div>Loading...</div>
    // }
  
    return (
      <div>
        <h2>Pokémon Home</h2>
        {/* <Filter handlerPage={(event) => handlerPage(event)}/> */}
        <div className={style.optionscontainer}>
            <Cards pokemons={currentPoke} /> 
        </div>
        <div className={style.movement}>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                handlePrev={handlePrev}
                handleNext={handleNext}
                
                />
        </div>   
      </div>
    );
  }
  
  export default Home;
  
  
  
  
  
  