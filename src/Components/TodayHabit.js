import { useContext } from "react";
import styled from "styled-components";
import LoginContext from "./contexts/LoginContext";
import image from "../assets/images/check.png"
import axios from "axios";



export default function TodayHabit() {
    const {todayList} = useContext(LoginContext);
    const {percentage} = useContext(LoginContext);
    const {numb} = useContext(LoginContext);
    const {refresh, setRefresh} = useContext(LoginContext);
    const {login} = useContext(LoginContext);

    function checkHabit(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, {
            headers: {
                Authorization: `Bearer ${login.token}`
              }
        });

        promise.then(() => {
            setRefresh(!refresh);
        })
        promise.catch((response) => {
            alert(response.response.data.message);
        })

    }
    function unCheckHabit(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, {
            headers: {
                Authorization: `Bearer ${login.token}`
              }
        });
        
        promise.then(() => {
            setRefresh(!refresh);
        })
        promise.catch((response) => {
            alert(response.response.data.message);
        })
    }
    


    return (
        <Wrapper>
            {numb === 0 ? <h4>Nenhum hábito concluído ainda</h4> : <h5>{percentage}% dos hábitos concluídos</h5>}
            {todayList.map((value, index) => {
                if(value.done) {
                    return (
                    <WrapperHabit key={index}>
                        <Text>
                            <h1>{value.name}</h1>
                            <h2>Sequência atual: <Done>{value.currentSequence} dias</Done></h2>
                            <h2>Seu Recorde: {value.highestSequence <= value.currentSequence ?
                                                 <Done>{value.highestSequence} dias</Done> : 
                                                 <span>{value.highestSequence} dias</span>}
                            </h2>
                        </Text>
                        <Check onClick={() => unCheckHabit(value.id)}>
                            <img src={image} alt="checkbox"></img>
                        </Check>
                    </WrapperHabit>
                    );
                } else {
                    return (
                    <WrapperHabit key={index}>
                        <Text>
                            <h1>{value.name}</h1>
                            <h2>Sequência atual: {value.currentSequence} dias</h2>
                            <h2>Seu Recorde: {value.highestSequence} dias</h2>
                        </Text>
                        <Uncheck onClick={() => checkHabit(value.id)}>
                            <img src={image} alt="checkbox"></img>
                        </Uncheck>
                    </WrapperHabit>
                    );
                }
            })}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    & h4 {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #BABABA;
        margin-bottom: 28px;
    }
    h5 {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #8FC549;
        margin-bottom: 28px;
    }   
    
`
const WrapperHabit = styled.div`
    height: 94px;
    width: 100%;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 15px;
    padding: 13px;
    display: flex;
    justify-content: space-between;
`
const Text = styled.div`
    width: auto;
    & h1 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }
    h2 {
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        color: #666666;
    }
`
const Done = styled.span`
    color: #8FC549;;
`
const Uncheck = styled.div`
    height: 69px;
    width: 69px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E7E7E7;
    background-color: #EBEBEB;
    cursor: pointer;
`
const Check = styled.div`
    height: 69px;
    width: 69px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8FC549;
    cursor: pointer;
`