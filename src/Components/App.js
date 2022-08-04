import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import LoginContext from "./contexts/LoginContext";
import { useState } from "react";
import Habits from "./Habits";
import { GlobalStyle } from "./styled-components";

export default function App() {
    const [login, setLogin] = useState({});

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <LoginContext.Provider value={{login, setLogin}}>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/cadastro" element={<Register />}/>
                        <Route path="/habitos" element={<Habits />}/>
                    </Routes>
                </LoginContext.Provider>
            </BrowserRouter>
        </>
    );
}

