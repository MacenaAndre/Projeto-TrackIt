import Footer from "./Footer";
import Header from "./Header";
import { WrapperMain } from "./styled-components";

export default function Today() {
    return (
        <WrapperMain>
            <Header></Header>
            <div>hoje</div>
            <Footer></Footer>
        </WrapperMain>
    );
}

