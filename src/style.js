import styled from "styled-components";

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

const TextBase = styled.p`
    margin: ${props=> props.margin};
    padding: ${props=> props.padding};
    text-align: ${props=> props.talign};
    color: ${props=> props.color};
    font-weight: ${props=> props.fweight};
    font-size: 12px;
`;

const BigTextTitle = styled(TextBase)`
  font-size: 24px;
`;

const SmallTextTitle = styled(TextBase)`
    font-size: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: ${props=> props.dark? '#000':'#fff'};
  p,a {
    color: ${props=> props.dark? '#fff':'#000'};
  }
`;

const Content = styled(Wrapper)`
  height:500px;
  width: 100%;
`;

const HomeWrapper = styled(Wrapper)`
  flex-direction: column;
  padding: 10px;
  flex:1;
`;

const FooterWrapper = styled(Wrapper)`
    align-items: center;
    justify-content: center;
    flex:0;
`;

const HeaderWrapper = styled(Wrapper)`
  padding: 20px;
  justify-content: center;
  ul {
    list-style-type: none;
    display: inline;
    li {
      display: inline;
      border-left: 1px solid #ccc;
      padding: 0 15px;
      a {
        text-decoration: none;
      }
    }
  }
`;

const SettingsWrapper = styled(Wrapper)`
  padding: 20px;
  justify-content: space-between;
  position: absolute;
  border-radius: 5px;
  opacity: ${props=> props.show? 1 : 0};
  visibility: ${props=> props.show? 'visible' : 'hidden'};
  border: ${props=> props.dark && '1px solid #fff'};
  box-shadow: ${props=> !props.dark && '0 2px 6px #ccc'};
  transition: all .3s ease;
  right: 20px;
  top: 50px;
  transform: ${(props) =>
      props.show? "translateY(40px)" : "translateY(0)"};
  ul {
    list-style-type: none;
    display: inline;
    margin: 0;
    padding: 0;
    li {
      display: flex;
    }
  }
`;

const ToggleWrapper = styled.span`
  display: inline-block;
  label {
    color: ${(props) => (props.dark? "#fff" : "000")};
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    input {
      opacity: 0;
      display: none;
      visibility: hidden;
    }
  }
`;

const ToggleSwitch = styled.div`
  width: 40px;
  height: 20px;
  margin: 0 20px;
  border-radius: 10px;
  background-color: ${(props) => (props.dark? "#8ecc47" : "#9e9e9e")};
  position: relative;

  > div {
    transform: ${(props) =>
      props.dark? "translateX(-20px)" : "translateX(0)"};
    transition: all 0.3s ease;
    height: 20px;
    width: 50%;
    position: absolute;
    right: 0;
    background-color: #ccc;
    border-radius: 10px;
  }
`;
const Container = styled.div`
  flex: ${props=> props.flex};
`;

const Icon = styled.img`
  background: ${props=> props.imgUrl && `url(${props.imgUrl})`}; 
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.dark? "#fff" : "#000")};
  color: ${(props) => (props.dark? "#000" : "#fff")};
  padding: 10px;
  transition: all .3s ease;
  border-radius: 10px;
  font-size: 13px;
  > img {
    width: 25px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.dark? "#000" : "#fff")};
    color: ${(props) => (props.dark? "#fff" : "#000")};
  }
  &:focus {
    outline: none;
  }
`;

export { 
  AppWrapper,
  Container,
  HeaderWrapper,
  ToggleWrapper,
  ToggleSwitch,
  HomeWrapper,
  SettingsWrapper,
  FooterWrapper,
  SmallTextTitle,
  BigTextTitle,
  Content,
  Button,
  Icon
};
