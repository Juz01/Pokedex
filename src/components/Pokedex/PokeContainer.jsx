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
        <>
            <div className="poke__container">
                {
                    initialItems?.map((pokemon) => (
                        <PokeCard 
                        key={pokemon.name} 
                        url = {pokemon.url} 
                    />
                    ))
                }     
            </div>
            <footer className="pagination__footer">
                <div className="pagination">
                    <button className="pagination__btn-prev" onClick={previousPage}
                            disabled={initialPage === 1}
                    >
                        Previous
                    </button>
                </div>
                <span className="pagination__pages">{ initialPage }</span>
                <div className="pagination">
                    <button 
                        className="pagination__next"
                        onClick={nextPage}
                        disable={initialItems?.length < contentPerPage}
                    > 
                    Next
                    </button>
                </div>
            </footer>
        </>
    )
}

export default PokeContainer