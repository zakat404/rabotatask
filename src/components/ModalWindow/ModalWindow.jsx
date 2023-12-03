import React from "react";
import './ModalWindow.scss'
import ButtonGreen from "../ButtonGreen/ButtonGreen";
import Input from "../Input/Input";

const ModalWindow = ({flagButton, closeModal}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return (
        <div
            className={
                flagButton
                    ? "main-page__bg-modal active"
                    : "main-page__bg-modal"
            }
        >
            <div className="modal-window">
                <div className="modal-window__column">
                    <div className="modal-window__title">
                        Начни прямо сейчас!
                    </div>
                    <div className="modal-window__subtitle">
                        Получи все нужные навыки для заработка на NFT всего
                        за 28 дней!
                    </div>
                    <form onSubmit={handleSubmit} className="modal-window__form form-modal" action="">
                        <Input/>
                        <ButtonGreen>Оплатить</ButtonGreen>
                    </form>
                </div>
                <div className="modal-window__column">
                    <div
                        onClick={() => closeModal()}
                        className="modal-window__close"
                    >
                        <img src="./img/main-page/close.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
