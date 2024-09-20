import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import FooterMenu from "./components/FooterMenu.jsx";
import store from "./store";
import {Provider} from "react-redux";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Header />
                <Main />
                <FooterMenu />
            </Provider>
        </div>
    )
}

export default App
