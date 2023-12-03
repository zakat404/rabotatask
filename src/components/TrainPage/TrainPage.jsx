import React from "react";
import "./TrainPage.scss";
import Card from "./Card/Card";

const cards = [
    {
        id: 1,
        img: "./img/train/card-1.png",
        text: "Откроешь свой первый криптокошелек и научишься с ним работать",
    },
    {
        id: 2,
        img: "./img/train/card-2.png",
        text: "Поймёшь, как выбирать правильные дропы",
    },
    {
        id: 3,
        img: "./img/train/card-3.png",
        text: "Построишь план по быстрому приумножению заработанных средств",
    },
    {
        id: 4,
        img: "./img/train/card-4.png",
        text: "Узнаешь кто такие холдеры и флипперы",
    },
];

const TrainPage = () => {
    return (
        <div id="train" className="train-page">
            <div className="container">
                <div className="train-page__wrapper">
                    <div className="train-page__title">
                        Что даст тебе обучение?
                    </div>
                    <div className="train-page__cards">
                        {cards.map((card) => (
                            <Card key={card.id} card={card}/>
                        ))}
                    </div>
                    <div className="train-page__blue-circle">
                        <img src="./img/train/blue-circle.svg" alt="" />
                    </div>

                    <div className="train-page__purple-circle-shadow">
                        <img
                            src="./img/train/purnle-circle-shadow.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="train-page__purple-circle">
                    <img src="./img/train/purple-circle.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TrainPage;
