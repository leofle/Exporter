import React, { useContext } from 'react'
import { Context } from '../store'
import { Card } from './Card'
import { HomeWrapper, BigTextTitle, ContainerFlex } from '../style'

export const Home = () => {
    const [state, dispatch] = useContext(Context);
    const { darktheme } = state;
    return (
        <HomeWrapper dark={darktheme}>
            <ContainerFlex
                direction={'column'}
                margin={'0 auto'}
            >
                <BigTextTitle>{ state.value }</BigTextTitle>
                <Card dark={darktheme}/>
            </ContainerFlex>
        </HomeWrapper>
    )
}
