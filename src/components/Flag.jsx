import {useState, useEffect} from "react";
import jsonData from '../utils/data.json'
import Card from "./Card";
import Search from "./Search";
import "./Flag.css"

function Flag(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchFlag = async()=>{
            try{
                setData(jsonData)
            }catch(e){
                alert("Fail to fetch data")
            }  
        }
        fetchFlag()
    }, [])

    return(<div className="search-bar">
            <Search data={data} setData={setData}/>
                <div className="cards-container">
                    {data.map((country)=>
                        <Card key={country.numericCode} country={country}/>
                    )}
                </div>
            </div>)
}

export default Flag;