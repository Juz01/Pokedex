import PokeCard from "./PokeCard"
import './styles/PokeContainer.css'

const PokeContainer = ({ pokemons, initialItems, setInitialPage, initialPage, contentPerPage }) => {

const previousPage = () => {
    setInitialPage((prevPage)  => prevPage -1 )
}

const nextPage = () => {
    setInitialPage((prevPage) => prevPage + 1)
}

    return (
        <div className="poke__container">
            {
                initialItems?.map((pokemon) => (
                    <PokeCard 
                    key={pokemon.name} 
                    url = {pokemon.url} 
                />
                ))
            }
            <div className="pagination">
                <button onClick={previousPage}
                        disabled={initialPage === 1}
                >
                    Previous
                </button>
            </div>
            <span>{ initialPage }</span>
            <button 
                onClick={nextPage}
                disable={initialItems?.length < contentPerPage}
            > 
            Next
            </button>
        {/* {
            pokemons?.map(pokemon => (
                <PokeCard 
                    key={pokemon.name} 
                    url = {pokemon.url} 
                />
            ))
            
        } */}
        
        </div>
    )
}

export default PokeContainer