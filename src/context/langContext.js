import React, { createContext, useState } from "react";

export const Context = createContext();

// On crée un tableau des langues qu'on a prévues
const supportedLangs = ['EN', 'FR', 'ES'];

// On récupère la langue du navigateur de l'utilisateur
let browserLang = navigator.language.slice(0,2).toUpperCase();

// Si la langue du navigateur n'est pas dans notre tableau, on utilisera alors l'anglais (par défaut)
if (supportedLangs.indexOf(browserLang) === -1) {
    browserLang = "EN";
}


const ContextProvider = props => {

    const [lang, setLang] = useState(browserLang);

    const toggleLang = (changeLang) => {
        setLang(changeLang);
    };

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;