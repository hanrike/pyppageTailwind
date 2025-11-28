import { createContext,useContext } from "react";

//creo el nombre al contexto q voy a crear
export const DarkModeContext = createContext(null);


export const useDarkMode=()=>{
    return useContext(DarkModeContext)
}