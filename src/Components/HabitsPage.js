import Footer from "./Footer";
import Habits from "./Habits";
import Header from "./Header";
import { WrapperMain } from "./styled-components";

export default function HabitsPage() {
    return (
        <WrapperMain>
            <Header></Header>
            <Habits></Habits>
            <Footer></Footer>
        </WrapperMain>
    );
}
