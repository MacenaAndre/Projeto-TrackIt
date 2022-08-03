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

    & img {
        width: 50%;
        height: 50%;
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
    button {
        height: 45px;
        width: 81%;
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