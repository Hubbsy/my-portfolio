import './App.scss';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Gaming from "./components/Gaming";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>} >
                    <Route index element={<Home/>} />
                    <Route path={"contact"} element={ <Contact/>} />
                    <Route path={"gaming"} element={ <Gaming/>} />
                </Route>
            </Routes>
        </>
      );
}

export default App;
