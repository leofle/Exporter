import React, { useContext } from 'react'
import { Context } from '../store'
import { Card } from './Card'
import { HomeWrapper, BigTextTitle } from '../style'

export const Home = () => {
    const [state, dispatch] = useContext(Context);
    const { darktheme } = state;
    return (
        <HomeWrapper dark={darktheme}>
            <BigTextTitle>{ state.value }</BigTextTitle>
            <Card dark={darktheme}/>
        </HomeWrapper>
    )
}
