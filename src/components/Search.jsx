import {useState, useEffect, useRef, useContext} from 'react';
import jsonData from '../utils/data.json'
import './Search.css';
import ThemeContext from '../context/ThemeContext'

function Search({data, setData}){
    const [input, setInput] = useState("")
    const regionData = useRef([]);
    const [selectOption, setSelectOption] = useState("All")
    const {theme} = useContext(ThemeContext)
    const handleChange = async(flagData)=>{
        const newData = flagData.filter((val)=> val.name.toLowerCase().startsWith(input))
        // check json data being used in Flag.jsx
        setData([...newData])
    }
    
    useEffect(()=>{
        if(selectOption!=='All' && input){
            const flagData = jsonData.filter((data)=>data.region===selectOption)
            handleChange(flagData)
        }
        else if(input&& selectOption==='All'){
            const flagData = [...jsonData]
            handleChange(flagData)
        }
        else if(selectOption!=='All'){
            const flagData = jsonData.filter((data)=>data.region===selectOption)
            setData(flagData)
        }
        else{
            setData(jsonData)
        }
        // eslint-disable-next-line
    }, [input, setData, selectOption])

    useEffect(()=>{
        const setData = new Set()
        jsonData.forEach((data)=>setData.add(data.region))
        regionData.current = [...setData]
    }, [])
    
    return(<div className={theme? 'header-search-dark': 'header-search-light'}>
                <div className='input-search'>
                    <div className='searchInput-icon'>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <input className='searchInput-content' type="text" value={input} placeholder='Search for a country...' onChange={(e)=>setInput(e.target.value)}/>
                </div>
                <select value={selectOption} onChange={(e)=>setSelectOption(e.target.value)}>
                    <option key={'all'} value='All'>All</option>
                    {regionData.current.map((country)=><option key={country} value={country}>{country}</option>)}
                </select>
            </div>)
}

export default Search;