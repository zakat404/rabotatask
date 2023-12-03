import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Header.scss'


const Header = () => {
    const [flagBurger, setFlagBurger] = useState(false);

    return (
        <header className="header">
            <div
                style={flagBurger ? { opacity: 0 } : null}
                className="header__logo"
            >
                <img src="./img/main/header-logo.svg" alt="" />
            </div>
            <div className="header__active active-header">
                <ul className="active-header__menu menu-active">
                    {/* <li className="menu-active__link">Главная</li> */}
                    <Link
                        // ctiveClass="active"
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className="menu-active__link"
                    >
                        Главная
                    </Link>
                    <Link
                        // ctiveClass="active"
                        to="train"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className="menu-active__link"
                    >
                        Что даст обучение
                    </Link>
                    {/* <li className="menu-active__link">
                                    Что даст обучение
                                </li> */}
                </ul>
                <button className="active-header__btn">Личный кабинет</button>
            </div>
            <div
                onClick={() => setFlagBurger(!flagBurger)}
                className={
                    flagBurger ? "header__burger active" : "header__burger"
                }
            >
                <span></span>
                <span></span>
            </div>
            <div
                className={
                    flagBurger
                        ? "header__burger-menu burger-menu active"
                        : "header__burger-menu burger-menu"
                }
            >
                <div className="burger-menu__logo">
                    <img src="./img/main/header-logo.svg" alt="" />
                </div>

                <ul className="burger-menu__list">
                    {/* <li className="burger-menu__link">Главная</li>
                                <li className="burger-menu__link">
                                    Что даст обучение
                                </li> */}
                    <Link
                        // ctiveClass="active"
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className="burger-menu__link"
                        onClick={() => setFlagBurger(!flagBurger)}
                    >
                        Главная
                    </Link>
                    <Link
                        // ctiveClass="active"
                        to="train"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="burger-menu__link"
                        onClick={() => setFlagBurger(!flagBurger)}
                    >
                        Что даст обучение
                    </Link>
                </ul>
                <button className="active-header__btn">Личный кабинет</button>
            </div>
        </header>
    );
};

export default Header;
