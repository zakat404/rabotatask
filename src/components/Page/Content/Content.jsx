import React from "react";
import Button from "../../Button/Button";
import './Content.scss'

const MainContent = ({openModal}) => {
    return (
        <div className="main-page__content content-page">
            <div className="content-page__row">
                <div className="content-page__text text-content">
                    <div className="text-content__title">
                        Не упусти возможность войти в 
                        <span>прибыльную нишу</span>
                    </div>
                    <div className="text-content__man">
                        <img src="./img/main/main-man.png" alt="" />
                    </div>
                    <p className="text-content__subtitle">
                        Получи все нужные навыки для заработка на NFT всего
                        за 28 дней!
                    </p>
                    <Button onClick={() => openModal()}>
                        Начать зарабатывать на NFT
                    </Button>
                </div>
                <div className="content-page__green-circle">
                    <img src="./img/main/green-circle.svg" alt="" />
                </div>

                <div className="content-page__man">
                    <img src="./img/main/main-man.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
