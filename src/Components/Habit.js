import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import image from "../assets/images/trash.png"
import LoginContext from "./contexts/LoginContext";

export default function Habit({ habits, refresh, setRefresh }) {
    const days2 = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const {login} = useContext(LoginContext);

    function deleteHabit(id) {
        let conf = window.confirm("Você tem certeza que deseja excluir este hábito");
        if(conf) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
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
    }

    return (
        <Wrapper>
            <Justify>
                <h1>{habits.name}</h1>
                <img src={image} alt="trash" onClick={() => deleteHabit(habits.id)}></img>
            </Justify>
            <div>
                {days2.map((value, index) => (
                    !habits.days.includes(index) ? 
                    <UnClicked 
                        key={index} 
                    >{value[0]}</UnClicked> : 
                    <Clicked 
                        key={index} 
                    >{value[0]}</Clicked> 
                ))}
            </div>
        
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 90px;
    width: 100%;
    border-radius: 5px;
    background-color: #FFFFFF;
    padding: 10px 18px;
    margin-bottom: 30px;

    & h1 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #666666;
        margin-bottom: 10px;
    }
    div {
        display: flex;
    }
    span {
        display: block;
        height: 30px;
        width: 30px;
        border-radius: 5px;
        margin-right: 3px;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        text-align: center;
        pointer-events: none;
    }
    img {
        height: 15px;
        width: 13px;
        cursor: pointer;
    }
`
const UnClicked = styled.span`
    border: 1px solid #D4D4D4;
    color: #D4D4D4;
`
const Clicked = styled.span`
    border: 1px solid #CFCFCF;
    background-color: #CFCFCF;
    color: #FFFFFF;
`
const Justify = styled.div`
    justify-content: space-between;
`