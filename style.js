import styled from 'styled-components'

const AppWrapper = styled.div`
    width: 100%;
    background-color: hotpink;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    ul {
        list-style-type:none;
        display:inline;
    li {
        margin: 5px;
        display:inline;
        a {
            text-decoration: none;
        }
    }
}
`;

export { AppWrapper, HeaderWrapper };