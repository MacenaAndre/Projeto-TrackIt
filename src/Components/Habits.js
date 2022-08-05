import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import LoginContext from "./contexts/LoginContext";
import CreateHabit from "./CreateHabit";

export default function Habits() {
    const {login} = useContext(LoginContext);
    let [toggle, setToggle] = useState(false);
    let [refresh, setRefresh] = useState(true);
    const [selecteds, setSelecteds] = useState([]); //talvez passar para os pais
    const [habitName, setHabitName] = useState("");
    const config = {
        headers: {
          Authorization: `Bearer ${login.token}`
        }
    } 

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        promise.then((response) => {
            console.log(response.data)
        })
        promise.catch((response) => {
            alert(response.response.data.message)
        })
    }, []);
    
    return (
        <>
            <Title>
                <h1>Meus hábitos</h1>
                <div onClick={() => setToggle(!toggle)}>+</div>
            </Title>
            {toggle ? <CreateHabit 
                            setToggle={setToggle}
                            habitName={habitName}
                            setHabitName={setHabitName}
                            selecteds={selecteds}
                            setSelecteds={setSelecteds}
                            refresh={refresh}
                            setRefresh={setRefresh}
                            /> : <></> }
            <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        </>
    );
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 28px;

    & h1 {
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        color: #126BA5;
    }
    div{
        background-color: #52B6FF;
        height: 35px;
        width: 40px;
        border-radius: 5px;
        font-size: 27px;
        font-weight: 400;
        line-height: 34px;
        color: #FFFFFF;
        text-align: center;
        cursor: pointer;
    }
`
const Text = styled.div`
        width: 100%;
        height: auto;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #666666;
`