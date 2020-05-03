import React, { useContext } from "react";
import { Context } from '../store'
import {HeaderWrapper, Button, Container, SmallTextTitle, ContainerFlex} from '../style'
import { Settings } from './Settings';
import {
  Link
} from "react-router-dom";

export const Header = () => {
    const [state, dispatch] = useContext(Context);
    const { darktheme, settings } = state;

    const handleClick = ()=> {
        dispatch({type: 'TOGGLE_SETTINGS', payload: !settings});
    }

    return (
        <HeaderWrapper dark={darktheme}>
            <ContainerFlex
            position={'relative'}
            >
            <Container
                display={'flex'}
                flex={9}
            >
                <ul>
                    <li>
                        <Link to="/">Zero</Link>
                    </li>
                    <li>
                        <Link to="/one">One</Link>
                    </li>
                    <li>
                        <Link to="/two">Two</Link>
                    </li>
                </ul>
            </Container>
            <Container
                flex={1}
            >
                <Button 
                    onClick={handleClick}
                    dark={darktheme}
                >
                    <SmallTextTitle>Settings</SmallTextTitle>
                    <svg xmlns='http://www.w3.org/2000/svg' fill={darktheme? '#000' : '#fff'} width='15' height='15' viewBox='0 0 29 29'>
                        <g id='XMLID_5_' transform='translate(-19.692 -18.8)'>
                            <path id='XMLID_9_' d='M45.237,34.74a12.757,12.757,0,0,0,.1-1.44,13.643,13.643,0,0,0-.1-1.44L48.4,29.476a.735.735,0,0,0,.2-.943l-2.963-5.015a.748.748,0,0,0-.919-.3L41,24.66a12.5,12.5,0,0,0-2.5-1.44L37.932,19.4a.71.71,0,0,0-.715-.6H31.189a.71.71,0,0,0-.715.6l-.562,3.824a9.586,9.586,0,0,0-2.5,1.44L23.68,23.22a.748.748,0,0,0-.919.3L19.8,28.533a.7.7,0,0,0,.2.943L23.17,31.86a12.758,12.758,0,0,0-.1,1.44,13.644,13.644,0,0,0,.1,1.44L20,37.124a.736.736,0,0,0-.2.943l2.963,5.015a.729.729,0,0,0,.919.3l3.729-1.44a12.5,12.5,0,0,0,2.5,1.44l.562,3.824a.71.71,0,0,0,.715.6h5.977a.71.71,0,0,0,.715-.6l.562-3.824a9.586,9.586,0,0,0,2.5-1.44l3.729,1.44a.748.748,0,0,0,.919-.3l2.963-5.015a.761.761,0,0,0-.2-.944ZM34.152,38.365a5.067,5.067,0,1,1,5.21-5.065A5.161,5.161,0,0,1,34.152,38.365Z' transform='translate(0 0)'></path>
                        </g>
                    </svg>
                </Button>
            </Container>
            <Settings/>
            </ContainerFlex>
        </HeaderWrapper>
    )
}
