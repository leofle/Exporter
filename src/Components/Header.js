import React, { useContext } from "react";
import { Context } from '../store'
import {HeaderWrapper, Button, Container, Icon} from '../style'
import settingsImg from '../images/settings.svg'
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
            <Container
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
                    <img src={settingsImg}/>
                </Button>
            </Container>
        </HeaderWrapper>
    )
}
