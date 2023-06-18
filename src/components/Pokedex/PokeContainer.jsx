import PokeCard from "./PokeCard"
import './styles/PokeContainer.css'

const PokeContainer = ({ pokemons }) => {
    return (
        <div className="poke__container">
        {
            pokemons?.map(pokemon => (
                <PokeCard 
                    key={pokemon.name} 
                    url = {pokemon.url} 
                />
            ))
            
        }
        
        </div>
    )
}

export default PokeContainer