import styled from "styled-components";

export default function WrapperMain({children}) {
    return (
        <Main>
            {children}
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #f2f2f2;
    padding: 100px 18px 100px 18px;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca', sans-serif;
`