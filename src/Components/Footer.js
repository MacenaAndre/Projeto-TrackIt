import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import LoginContext from "./contexts/LoginContext";
import axios from "axios";

export default function Footer() {
    const config = JSON.parse(localStorage.getItem("trackit"));
    const {percentage, refresh, setTodayList, setNumb, setPercentage} = useContext(LoginContext);

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
        <FooterBox>
            <Link to="/habitos">
                <h3>Hábitos</h3>
            </Link>
            <Link to="/hoje">
                <div>
                    <CircularProgressbar 
                        value={percentage}
                        text={"Hoje"}
                        background={true}
                        backgroundPadding={6}
                        styles={buildStyles({
                            textSize: 18,
                            pathColor: '#FFFFFF',
                            textColor: '#FFFFFF',
                            trailColor: '#52B6FF',
                            backgroundColor: '#52B6FF',
                            pathTransitionDuration: 1.5
                        })}
                    />
                </div>
            </Link>
            <Link to="/historico">
                <h3>Histórico</h3>
            </Link>
        </FooterBox>
    );
}

const FooterBox = styled.div`
    height: 70px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
    padding: 0px 18px;
    z-index: 1;

    & h3 {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #52B6FF;
    }
    div {
        height: 91px;
        width: 91px;
        margin-bottom: 40px;
    }
    a {
        text-decoration: none;
    }
`