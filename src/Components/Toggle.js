import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../store'
import { ToggleWrapper, ToggleSwitch } from '../style'

export const Toggle = ({handleChange, label, enabler, save}) => {
    const [enabled, setEnabled] = useState(null);
    const [state, dispatch] = useContext(Context);
    const { darktheme } = state;

    useEffect(()=> {
        setEnabled(enabler)
    }, [enabler]);

    const dispatchPayload = () => {
        dispatch({ type: handleChange.type, payload: handleChange.payload });
    };

    const saveToLocalStorage = ()=> {
        if(!save) return;
        let itemName = label.replace(/\s/g, "");
        let item = window.localStorage.getItem(itemName);
        let parsedItem = JSON.parse(item);
        
        if (parsedItem) {
            window.localStorage.setItem(itemName, JSON.stringify(!parsedItem));
        } else {
            window.localStorage.setItem(itemName, 'true');
        }
    }

    return (
        <ToggleWrapper dark={darktheme}>
            <label>{label}
                <ToggleSwitch 
                    onClick={saveToLocalStorage}
                    dark={darktheme}
                >
                    <div/>
                </ToggleSwitch>
                <input type="checkbox" onChange={dispatchPayload} {...enabled}/>
            </label>
        </ToggleWrapper>
    )
}
