import { useNavigate } from "react-router-dom";


const min = 1000 * 60;
const hour = min * 60;
const day = hour * 24;

export default function PrivatePage({children}) {
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem("trackit"));

    function logOut() {
        localStorage.clear("trackit");
        navigate("/");
    }

    if(auth === null) {
        logOut();
        return <>Página não autorizada</>;
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