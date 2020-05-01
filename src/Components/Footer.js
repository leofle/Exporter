import React, { useContext } from 'react'
import { FooterWrapper, SmallTextTitle } from '../style'
import { Context } from "../store";

export const Footer = () => {
    const [state, dispatch] = useContext(Context);
    const { darktheme } = state;
    
    return (
        <FooterWrapper dark={darktheme}>
            <SmallTextTitle>Footer 2020</SmallTextTitle>
        </FooterWrapper>
    )
}
