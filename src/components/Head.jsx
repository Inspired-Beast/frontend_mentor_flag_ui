import { useContext, useEffect} from "react";
import ThemeContext from "../context/ThemeContext";
import "./Head.css"

function Head(){
    const {theme, setTheme} = useContext(ThemeContext)
    useEffect(() => {
        if (theme) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [theme]); 
    return(
        <div className={theme ? "header-dark" : "header-light"}>
            <h1>Where in the world?</h1>
            <button className="theme-button" onClick={()=>setTheme(!theme)}>
                {!theme?
                "🌛 Dark" : "🌞 Light"}
                </button>
        </div>
    )
}

export default Head;