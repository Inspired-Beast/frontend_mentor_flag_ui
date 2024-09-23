import './Card.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Card({country}){
    const {theme} = useContext(ThemeContext)
    return(
        <div className={theme ?'card-dark': 'card-light' }>
            <Link to={`/country/${country.alpha3Code}`}>
                <div className="country-image">
                    <img src={country.flag} alt={country.name}/>
                </div>
                <div className="card-text">
                    <h2>{country.name}</h2>
                    <p><b>Population:</b> <span>{country.population}</span></p>
                    <p><b>Region:</b> <span>{country.region}</span></p>
                    <p><b>Region:</b> <span>{country.capital}</span></p>
                </div>
            </Link>
        </div>
    )

}

export default Card;
