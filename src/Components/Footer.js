import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <FooterBox>
            <Link to="/habitos">
                <h3>Hábitos</h3>
            </Link>
            <Link to="/hoje">
                <div>
                    <CircularProgressbar 
                        value={66}
                        text={"Hoje"}
                        background={true}
                        backgroundPadding={6}
                        styles={buildStyles({
                            textSize: 18,
                            pathColor: '#FFFFFF',
                            textColor: '#FFFFFF',
                            trailColor: '#52B6FF',
                            backgroundColor: '#52B6FF',
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