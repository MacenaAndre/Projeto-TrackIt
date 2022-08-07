import styled from "styled-components";

function WrapperForm ({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    & img {
        width: 50%;
        max-width: 180px;
        height: 50%;
        max-height: 180px;
        margin-top: 68px;
    }
    input {
        padding-left: 20px;
        height: 45px;
        width: 75%;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin: 5px 0px;
        color: #000000;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
    }
    input::placeholder {
        color: #DBDBDB;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
    }
    input:disabled {
        background-color: #F2F2F2;
        color: #AFAFAF;
        border: 1px solid #D4D4D4;
    }
    button {
        height: 45px;
        width: 75%;
        border-radius: 5px;
        background-color: #52B6FF;
        box-shadow: none;
        border: none;
        cursor: pointer;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 4px;
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button:disabled {
        opacity: 0.7;
    }
    a {
        color: #52B6FF;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        text-align: center;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 28px;
        width: 100%;
        height: auto;
    }
`
export default WrapperForm;