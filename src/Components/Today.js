import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { WrapperMain } from "./styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale"

export default function Today() {
    const weekday = dayjs().locale("pt-br").format("dddd");//botar maiuscula, limitar apenas a uma palavra, data
    
    return (
        <WrapperMain>
            <Header></Header>
            <Title>{weekday}, 17/05</Title>
            <Footer></Footer>
        </WrapperMain>
    );
}
const Title = styled.h1`
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5;
`

