import { Link } from "react-router-dom";
import { WrapperForm } from "./styled-components"
import image from "../assets/images/logo.png"

export default function Register() {
    return (
        <WrapperForm>
            <img src={image} alt="Logo"/>
            <form>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <input placeholder="nome"></input>
                <input placeholder="foto"></input>
                <button>Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </WrapperForm>
    );
}