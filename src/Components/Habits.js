import { useState } from "react";
import styled from "styled-components"; //recebe o get dos hábitos
import CreateHabit from "./CreateHabit";

export default function Habits() {
    let [toggle, setToggle] = useState(false);

    return (
        <>
            <Title>
                <h1>Meus hábitos</h1>
                <div onClick={() => setToggle(!toggle)}>+</div>
            </Title>
            {toggle ? <CreateHabit /> : <></> }
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