import React from "react";
import {HeaderWrapper} from '../../style';
import {
  Link
} from "react-router-dom";

export const Header = () => {
    return (
        <HeaderWrapper>
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
        </HeaderWrapper>
    )
}
