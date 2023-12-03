import React, { useState } from "react";
import "./MainPage.scss";
import ButtonGreen from "../ButtonGreen/ButtonGreen";
import ModalWindow from "../ModalWindow/ModalWindow";
import Header from "../Header/Header";
import MainContent from "./MainContent/MainContent";

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
