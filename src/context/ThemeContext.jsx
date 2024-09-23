import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState(true)
    const data = { theme, setTheme };
    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}  

export {ThemeProvider}
export default ThemeContext;