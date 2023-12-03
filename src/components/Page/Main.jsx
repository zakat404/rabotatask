import React, { useState } from "react";
import "./Main.scss";
import ModalWindow from "../Window/Window";
import Header from "../Header/Header";
import MainContent from "./Content/Content";

const MainPage = () => {
    const [flagButton, setFlagButton] = useState(false);

    const openModal = () => {   
        setFlagButton(true)
        document.body.classList.add("stop");
    }
    const closeModal = () => {
        setFlagButton(false)
        document.body.classList.remove("stop");
    }


    return (
        <>
            <ModalWindow flagButton={flagButton} closeModal={closeModal}/>
            <div id="main" className="main-page">
                <div className="container">
                    <Header/>
                    <MainContent openModal={openModal}/>
                </div>
            </div>
        </>
    );
};

export default MainPage;
