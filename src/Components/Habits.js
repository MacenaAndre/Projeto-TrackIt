import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginContext from "./contexts/LoginContext";
import CreateHabit from "./CreateHabit";
import Habit from "./Habit";

export default function Habits() {
    const {login} = useContext(LoginContext);
    let [toggle, setToggle] = useState(false);
    const {refresh}= useContext(LoginContext);
    const [selecteds, setSelecteds] = useState([]); //talvez passar para os pais, caso alguma parte recarregue os hábitos
    const [habitName, setHabitName] = useState("");
    const [listHabits, setListHabits] = useState([]);
    const navi = useNavigate();

    function navigate() {
        navi("/")
    }    
        

    useEffect(() => {
        

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
              Authorization: `Bearer ${login.token}`
            }
        });

        promise.then((response) => {
            setListHabits(response.data.reverse());
        })
        promise.catch(() => {
            navigate();
        })
        // eslint-disable-next-line
    }, [refresh, login.token]);
    
    return (
        <>
            <Title>
                <h1>Meus hábitos</h1>
                {toggle ? <div onClick={() => setToggle(!toggle)}>-</div> : <div onClick={() => setToggle(!toggle)}>+</div>}
            </Title>
            {toggle ? <CreateHabit 
                            setToggle={setToggle}
                            habitName={habitName}
                            setHabitName={setHabitName}
                            selecteds={selecteds}
                            setSelecteds={setSelecteds}
            /> : <></> }
            {listHabits.length < 1 ? <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text> : 
            listHabits.map((value, index) => (
            <Habit 
                key={index} 
                habits={value}
            />
            ))}
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