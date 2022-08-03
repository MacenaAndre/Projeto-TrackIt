import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";

export default function App() {
    return (
        <Main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/cadastro" element={<Register />}/>
                </Routes>
            </BrowserRouter>
        </Main>
    );
}

const Main =  styled.div`
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
`