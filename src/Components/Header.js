import React, { useContext } from "react";
import { Context } from '../store'
import { Toggle } from './Toggle'
import {HeaderWrapper} from '../style';
import {
  Link
} from "react-router-dom";

export const Header = () => {
    const [state, dispatch] = useContext(Context);
    const { darktheme } = state;

    return (
        <HeaderWrapper dark={darktheme}>
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
                <li>
                    <Toggle/>
                </li>
            </ul>
        </HeaderWrapper>
    )
}
