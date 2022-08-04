import { useContext } from "react";
import LoginContext from "./contexts/LoginContext";
import Header from "./Header";

export default function Habits() {
    const {login} = useContext(LoginContext);

    return (
        <Header></Header>
    );
}