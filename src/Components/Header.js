import styled from "styled-components";
import { useContext } from "react";
import LoginContext from "./contexts/LoginContext";

export default function Header() {
    const {login} = useContext(LoginContext);
    console.log(login)

    return (
        <HeaderBox>
            <h1>Trackit</h1>
            <img src={login.image} alt="userimage"></img>
        </HeaderBox>
    );
}

const HeaderBox = styled.div`
    height: 70px;
    width: 100%;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 18px;
    position: fixed;
    top: 0px;
    left: 0px;

    & h1 {
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        color: #FFFFFF;
    }
    img {
        height: 51px;
        width: 51px;
        border-radius: 98.5px;
    }
`