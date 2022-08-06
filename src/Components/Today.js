import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { WrapperMain } from "./styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import axios from "axios";
import { useContext, useEffect } from "react";
import LoginContext from "./contexts/LoginContext";
import TodayHabit from "./TodayHabit";

export default function Today() {
    const weekday = dayjs().locale("pt-br").format("dddd");//botar maiuscula, limitar apenas a uma palavra, data
    const {login, refresh } = useContext(LoginContext);
    const {todayList, setTodayList} = useContext(LoginContext);
    const {setNumb} = useContext(LoginContext);
    const {setPercentage} = useContext(LoginContext);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
              Authorization: `Bearer ${login.token}`
            }
        });

        promise.then((response) => {
            setTodayList(response.data);
            setNumb(response.data.filter((value) => value.done === true).length);
            setPercentage((response.data.filter((value) => value.done === true).length/response.data.length) * 100);
        })
        promise.catch((response) => {
            alert(response.response.data.message);
        })
    }, [refresh, login.token])
    
    return (
        <WrapperMain>
            <Header></Header>
            <Title>{weekday}, 17/05</Title>
            {todayList.length < 1 ? <Text>Você não tem nenhum hábito para concluir hoje.</Text> : (
                <TodayHabit></TodayHabit>
            )}
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
const Text = styled.div`
        width: 100%;
        height: auto;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #666666;
        margin-top: 18px;
`

