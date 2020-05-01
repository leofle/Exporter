import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../store'
import { ToggleWrapper, ToggleSwitch } from '../style'

export const Toggle = () => {
    const [state, dispatch] = useContext(Context);
    const [enabled, setEnabled] = useState(null);
    const { darktheme } = state;
    const darkLocal = 'darktheme';

    useEffect(()=> {
        setEnabled(darktheme)
    }, [darktheme]);

    const handleChange = ()=> {
        dispatch({ type: "SET_DARKTHEME", payload: darktheme });
    }

    const handleSwitch = ()=> {
        let item = window.localStorage.getItem(darkLocal);
        let parsedItem = JSON.parse(item);
        
        if (parsedItem) {
            window.localStorage.setItem(darkLocal, JSON.stringify(!parsedItem));
        } else {
            window.localStorage.setItem(darkLocal, 'true');
        }
    }
    return (
        <ToggleWrapper dark={darktheme}>
            <label>Dark Mode
                <ToggleSwitch 
                    onClick={handleSwitch}
                    dark={darktheme}
                >
                    <div/>
                </ToggleSwitch>
                <input type="checkbox" onChange={handleChange} {...enabled}/>
            </label>
        </ToggleWrapper>
    )
}
