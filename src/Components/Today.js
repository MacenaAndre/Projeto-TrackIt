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
    let weekday = dayjs().locale("pt-br").format("dddd");
    let date = dayjs().locale("pt-br").format("DD/MM");
    const config = JSON.parse(localStorage.getItem("trackit"));
    const {todayList, setTodayList, refresh, setNumb, setPercentage} = useContext(LoginContext);
    

    function Upper() {
        let str = "";
        for(let i = 0; i < weekday.length; i++) {
            if(i === 0){
                str += weekday[i].toUpperCase();
            } else {
                if(weekday[i] === "-") {
                    return str;
                }
                str += weekday[i];
            }
        }
        return str;
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
              Authorization: `Bearer ${config.token}`
            }
        });

        promise.then((response) => {
            setTodayList(response.data.reverse());
            setNumb(response.data.filter((value) => value.done === true).length);
            if(response.data.filter((value) => value.done === true).length < 1)  {
                setPercentage(0)
            } else {
                setPercentage(Math.round((response.data.filter((value) => value.done === true).length/response.data.length) * 100));
            }
        })
        promise.catch((response) => {
            alert(response.response.data.message);
        })
    }, [refresh, config.token, setNumb, setPercentage, setTodayList])
    
    return (
        <WrapperMain>
            <Header></Header>
            <Title>{Upper()}, {date}</Title>
            {todayList.length < 1 ? <Text>Você não tem nenhum hábito para concluir hoje.</Text> : <TodayHabit></TodayHabit>}
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

