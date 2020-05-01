import React, { useContext } from 'react'
import { Context } from '../store'

export const Home = () => {
    const [state, dispatch] = useContext(Context);
    return (
        <div>
            <h3>{ state.value }</h3>
        </div>
    )
}
