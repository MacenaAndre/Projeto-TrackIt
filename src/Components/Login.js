import { Link, useNavigate } from "react-router-dom";
import { WrapperForm } from "./styled-components"
import image from "../assets/images/logo.png"
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import LoginContext from "./contexts/LoginContext";
import axios from "axios";


export default function Login() {
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [buttonLogin, setButtonLogin] = useState(false);
    const {setLogin} = useContext(LoginContext);
    const navigate = useNavigate();

    function loginAPI(e) {
        e.preventDefault();

        const objPost = {
            email: emailLogin,
            password: passwordLogin,
        };

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", objPost);

        promise.then((response) => {
            localStorage.setItem("trackit", JSON.stringify({
                token: response.data.token,
                time: +new Date(),
                image: response.data.image
            }))
            setLogin(response.data)
            navigate("/hoje")
            
        });
        promise.catch((response) => {
            setButtonLogin(false)
            alert(response.response.data.message)
        });
        
        setButtonLogin(!buttonLogin);
    }

    return (
            <WrapperForm>
                <img src={image} alt="Logo"/>
                <form onSubmit={loginAPI}>
                    <input
                        placeholder="email"
                        type="email"
                        onChange={(e) => setEmailLogin(e.target.value)}
                        value={emailLogin}
                        disabled={buttonLogin}
                        required
                        ></input>
                    <input
                        placeholder="senha"
                        type="password"
                        onChange={(e) => setPasswordLogin(e.target.value)}
                        value={passwordLogin}
                        disabled={buttonLogin}
                        required
                        ></input>
                    {!buttonLogin ? <button>Entrar</button> : <button disabled={buttonLogin}><ThreeDots color="#FFFFFF" width={60} height={60}/></button> }
                </form>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </WrapperForm>
    );
}


