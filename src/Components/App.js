import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import LoginContext from "./contexts/LoginContext";
import { useState } from "react";
import HabitsPage from "./HabitsPage";
import { GlobalStyle } from "./styled-components";
import Today from "./Today";
import History from "./History";
import PrivatePage from "./PrivatePage";

export default function App() {
    const [login, setLogin] = useState({});
    let [refresh, setRefresh] = useState(true);
    const [todayList, setTodayList] = useState([]);
    const [listHabits, setListHabits] = useState([]);
    let [numb, setNumb] = useState(0)
    let [percentage, setPercentage] = useState(0);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <LoginContext.Provider value={{login, setLogin, refresh, setRefresh, todayList, setTodayList, percentage,
                                             setPercentage, numb, setNumb, listHabits, setListHabits}}>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/cadastro" element={<Register />}/>
                        <Route path="/habitos" element={
                            <PrivatePage>
                                <HabitsPage />
                            </PrivatePage>
                        }/>
                        <Route path="/hoje" element={
                            <PrivatePage>
                                <Today />
                            </PrivatePage>
                        }/>
                        <Route path="/historico" element={
                            <PrivatePage>
                                <History />
                            </PrivatePage>
                        }/>
                    </Routes>
                </LoginContext.Provider>
            </BrowserRouter>
        </>
    );
}

