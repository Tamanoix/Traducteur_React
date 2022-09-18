import React, { useContext } from 'react';
import { Context } from '../../context/langContext';
import FrenchFlag from '../../assets/france.svg';
import SpanishFlag from '../../assets/spain.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import './ToggleLangs.css';


const ToggleLangs = () => {

    const {toggleLang} = useContext(Context);

    return (
        <div className='container-langs'>

            <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt="" />
            <img onClick={() => toggleLang('EN')} src={EnglishFlag} alt="" />
            <img onClick={() => toggleLang('ES')} src={SpanishFlag} alt="" />
            
        </div>
    )
}

export default ToggleLangs;