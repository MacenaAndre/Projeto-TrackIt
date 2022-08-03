import { Link } from "react-router-dom";
import { WrapperForm } from "./styled-components"
import image from "../assets/images/logo.png"

export default function Login() {
    return (
        <WrapperForm>
            <img src={image} alt="Logo"/>
            <form>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <button>Entrar</button>
            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </WrapperForm>
    );
}

