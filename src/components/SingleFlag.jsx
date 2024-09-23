import { useEffect, useState, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import jsonData from '../utils/data.json'
import "./SingleFlag.css"
import ThemeContext from "../context/ThemeContext"

function SingleFlag(){
    const {name} = useParams()
    const [country, setCountry] = useState({})
    const {theme} = useContext(ThemeContext)

    useEffect(()=>(
        setCountry(jsonData.filter((val)=>val.alpha3Code===name)[0])
    ), [name])
    return(
        <div className={theme?"single-flag-dark": "single-flag-light"}>
            {country&&
            <div className="single-flag-container">
            <Link to="/">
                <button className="back-button">👈 Back</button>
            </Link>
            <br />
            <div className="single-flag">
                <div className="single-flag-image">
                    <img src={country.flag} alt={country.name}/>
                </div>
                <div className="single-flag-info">
                    <div className="card-text">
                        <h2>{country.name}</h2>
                        <p><b>Population:</b> <span>{country.population}</span></p>
                        <p><b>Region:</b> <span>{country.region}</span></p>
                        <p><b>Region:</b> <span>{country.capital}</span></p>
                    </div>
                    <div className="border-countries">
                        <div>Border Counteries: </div>
                        {country['borders'] ? country['borders'].map((states, id)=>
                        <Link key={id} to={`/country/${states}`}><button>{states}</button></Link>): <div> No border countries</div>}
                    </div>
                </div>
            </div>
        </div>
    }</div>
    )
}

export default SingleFlag;