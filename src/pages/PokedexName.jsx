import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"

const PokedexName = () => {

    const { name } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [ pokemon, getPokemonByName, hasError ] = useFetch(url)

    useEffect(() => {
        getPokemonByName()
    }, [name])


  return (
    <>
    <div className="">
        
    </div>


        <div className="pokedex__sorry-container">
            <img src="/headerpokedex.svg" alt="" />
            {
                hasError
                ? <h1 className="pokedex__sorry">
                    <p className="pokedex__sorry-title">Really sorry but <span>"{name}"</span> doesn't exist</p>
                    <div>
                        <img className="pokedex__sorry-img" src="https://i.pinimg.com/736x/4c/e4/f9/4ce4f9eca064585f136659a3a503226f.jpg" alt="" />
                    </div>
                </h1>
                : (
                    <>
                        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                        <h2>{pokemon?.name}</h2>
                    </>
                )
            }
            <h1 className="pokedex__search">{name}</h1>
        </div>

    
    </>
  )
}

export default PokedexName