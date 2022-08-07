import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { WrapperMain } from "./styled-components";

export default function History() {
    return (
        <WrapperMain>
            <Header></Header>
            <Title>Histórico</Title>
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
`
const Text = styled.div`
        width: 100%;
        height: auto;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #666666;
        margin-top: 29px;
`