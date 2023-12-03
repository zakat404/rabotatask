import React from "react";

const Card = ({card}) => {
    return (
        <div className="card-container">
            <div className="train-page__card card-train">
                <div className="card-train__img">
                    <img src={card.img} alt="" />
                </div>
                <div className="card-train__text">{card.text}</div>
            </div>
            <div className="card-train__under"></div>
        </div>
    );
};

export default Card;
