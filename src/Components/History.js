import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { WrapperMain } from "./styled-components";
import Calendar from "react-calendar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';

export default function History() {
    const [value, onChange] = useState(new Date());

    return (
        <WrapperMain>
            <Header></Header>
            <Title>Histórico</Title>
            <Wrapper>
                <Calendar onChange={onChange} value={value} locale={"pt-br"}/>
            </Wrapper>
            <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
            <Footer></Footer>
        </WrapperMain>
    );
}

const Title = styled.h1`
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5;
    margin-top: 5px;
    margin-bottom: 10px;
`
const Text = styled.div`
        width: 100%;
        height: auto;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #666666;
        margin-top: 19px;
`
const Wrapper = styled.div`
    width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    & div {
        border: none;
        border-radius: 10px;
        width: 100%;
    }
`