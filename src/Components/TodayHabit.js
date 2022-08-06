import { useContext } from "react";
import styled from "styled-components";
import LoginContext from "./contexts/LoginContext";


export default function TodayHabit() {
    const {todayList} = useContext(LoginContext);
    const {percentage, setPercentage} = useContext(LoginContext);
    const {numb, setNumb} = useContext(LoginContext);

    console.log(numb, percentage, todayList);
    


    return (
        <Wrapper>
            {numb === 0 ? <h4>Nenhum hábito concluído ainda</h4> : <h5>{percentage}% dos hábitos concluídos</h5>}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    & h4 {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #BABABA;
    }
    h5 {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #8FC549;
    }
`