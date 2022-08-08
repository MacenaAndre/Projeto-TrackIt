//import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import LoginContext from "./contexts/LoginContext";

const min = 1000 * 60;
const hour = min * 60;
const day = hour * 24;

export default function PrivatePage({children}) {
    //const {setLogin} = useContext(LoginContext);
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem("trackit"));

    //useEffect(() => {
        //setLogin(auth);
    //}, [auth])
    function logOut() {
        localStorage.clear("trackit");
        navigate("/");
    }

    if(auth === null) {
        logOut();
        return <></>;
    }

    
    const now = +new Date();
    const LoggedTime = auth.time;

    if(now - LoggedTime <= day) {
        return (
            <>
                {children}
            </>
        )
    } else {
        logOut();
        return <>Página não autorizada</>;
    }
}