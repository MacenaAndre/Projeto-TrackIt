import { useContext, useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import LoginContext from "./contexts/LoginContext";
import axios from "axios";

export default function CreateHabit({ setToggle, habitName, setHabitName, selecteds, setSelecteds, refresh, setRefresh }) {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const {login} = useContext(LoginContext);
    const [buttonSave, setButtonSave] = useState(false);

    function selectDay( day ) {

        if(selecteds.includes(day)) {
            setSelecteds(selecteds.filter((value )=> day !== value))
        } else {
            setSelecteds([...selecteds, day])
        }
    }

    function sendHabit(e) {
        e.preventDefault();

        if(selecteds.length < 1) {
            alert("Selecione Pelo menos um dia da semana")
            return;
        }
        const body = {
            name: habitName,
            days: selecteds
        }
        const config = {
            headers: {
              Authorization: `Bearer ${login.token}`
            }
        } 
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);

        promise.then((response) => {
            setButtonSave(false)
            setHabitName("")
            setSelecteds([])
            setToggle(false)
            setRefresh(!refresh)
            //carregar pagina
        });
        promise.catch((response) => {
            setButtonSave(false)
            alert(response.response.data.message)
        });
        setButtonSave(!buttonSave);
    }
    return (
        <FormHabit>
            <form onSubmit={sendHabit}>
                <input
                    type="text"
                    placeholder="nome do hábito"
                    onChange={(e) => setHabitName(e.target.value)}
                    value={habitName}
                    disabled={buttonSave}
                    required
                ></input>
                <div>
                    {days.map((value, index) => (
                        !selecteds.includes(index) ? 
                            <UnClicked 
                                key={index} 
                                onClick={() => selectDay(index)}
                            >{value[0]}</UnClicked> : 
                            <Clicked 
                                key={index} 
                                onClick={() => selectDay(index)}
                            >{value[0]}</Clicked> 
                    ))}              
                </div>
                <Buttons>
                    <h1 onClick={() => setToggle(false)}>Cancelar</h1>
                    {!buttonSave ? <button>Salvar</button> : <button disabled={buttonSave}><ThreeDots color="#FFFFFF" width={40} height={40}/></button> }
                </Buttons>
            </form>
        </FormHabit>
    );
}

const FormHabit = styled.div`
    height: 180px;
    width: 100%;
    border-radius: 5px;
    background-color: #FFFFFF;
    padding: 18px;
    margin-bottom: 30px;

    & div {
        display: flex;
    }
    input {
        height: 45px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin-bottom: 8px;
        padding-left: 11px;
    }
    input::placeholder {
        color: #DBDBDB;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
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
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;

    & h1 {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: #52B6FF;
        margin-right: 10px;
        cursor: pointer;
    }
    button {
        height: 35px;
        width: 32%;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        box-shadow: none;
        cursor: pointer;
    }
    button:disabled {
        opacity: 0.7;
    }
`