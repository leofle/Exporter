import React, { useContext } from 'react'
import { Context } from '../store'
import { HomeWrapper, BigTextTitle, Content } from '../style'

export const Home = () => {
    const [state, dispatch] = useContext(Context);
    const { darktheme } = state;
    return (
        <HomeWrapper dark={darktheme}>
            <BigTextTitle>{ state.value }</BigTextTitle>
            <Content dark={darktheme}/>
        </HomeWrapper>
    )
}
