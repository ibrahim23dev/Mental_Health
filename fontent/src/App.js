import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import CreateForms from "./Pages/CreateForms";
function App() {
    return (
        <>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
     <Route index element={<Home/>}/>
            <Route path="/forms" element={<CreateForms/>}/>
        </Route>
    </Routes>
</BrowserRouter>

        </>
    );
}

export default App;