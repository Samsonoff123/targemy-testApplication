import React from "react";
import classes from './MyHeader.module.css'
import logo from '../../image/Logo.png'
import bell from '../../image/bell.svg'
import add from '../../image/add.svg'
import avatar from '../../image/avatar.png'

export const Header = ({isAuth, setIsModalVisible}) => {

    const handleOk = () => {
        setIsModalVisible(true);
    };



    return (
        <header>
            <div className="container">
                <div className={classes.header__main}>
                    <img src={logo} alt="icon" />
                    <div className={classes.input}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4235 14.1306L14.1306 13.4235L13.4707 12.7636L12.7669 13.3763L13.4235 14.1306ZM16.5901 17.2972L15.883 18.0043L15.883 18.0043L16.5901 17.2972ZM16.9436 17.6507L16.2365 18.3579L16.9436 19.065L17.6507 18.3579L16.9436 17.6507ZM17.6507 16.9436L18.3579 17.6507L19.065 16.9436L18.3579 16.2365L17.6507 16.9436ZM17.2972 16.5901L18.0043 15.883L18.0043 15.883L17.2972 16.5901ZM14.1306 13.4235L13.3763 12.7669L12.7636 13.4707L13.4235 14.1306L14.1306 13.4235ZM8.69887 1.5C4.72305 1.5 1.5 4.72305 1.5 8.69887H3.5C3.5 5.82761 5.82761 3.5 8.69887 3.5V1.5ZM15.8977 8.69887C15.8977 4.72305 12.6747 1.5 8.69887 1.5V3.5C11.5701 3.5 13.8977 5.82761 13.8977 8.69887H15.8977ZM8.69887 15.8977C12.6747 15.8977 15.8977 12.6747 15.8977 8.69887H13.8977C13.8977 11.5701 11.5701 13.8977 8.69887 13.8977V15.8977ZM1.5 8.69887C1.5 12.6747 4.72305 15.8977 8.69887 15.8977V13.8977C5.82761 13.8977 3.5 11.5701 3.5 8.69887H1.5ZM2.5 8.69887C2.5 5.27533 5.27533 2.5 8.69887 2.5V0.5C4.17076 0.5 0.5 4.17076 0.5 8.69887H2.5ZM8.69887 14.8977C5.27533 14.8977 2.5 12.1224 2.5 8.69887H0.5C0.5 13.227 4.17076 16.8977 8.69887 16.8977V14.8977ZM12.7669 13.3763C11.6776 14.3246 10.2564 14.8977 8.69887 14.8977V16.8977C10.7573 16.8977 12.6407 16.1379 14.0801 14.8848L12.7669 13.3763ZM17.2972 16.5901L14.1306 13.4235L12.7164 14.8377L15.883 18.0043L17.2972 16.5901ZM17.6507 16.9436L17.2972 16.5901L15.883 18.0043L16.2365 18.3579L17.6507 16.9436ZM16.9436 16.2365L16.2365 16.9436L17.6507 18.3579L18.3579 17.6507L16.9436 16.2365ZM16.5901 17.2972L16.9436 17.6507L18.3579 16.2365L18.0043 15.883L16.5901 17.2972ZM13.4235 14.1306L16.5901 17.2972L18.0043 15.883L14.8377 12.7164L13.4235 14.1306ZM14.8977 8.69887C14.8977 10.2564 14.3246 11.6776 13.3763 12.7669L14.8848 14.0801C16.1379 12.6407 16.8977 10.7573 16.8977 8.69887H14.8977ZM8.69887 2.5C12.1224 2.5 14.8977 5.27533 14.8977 8.69887H16.8977C16.8977 4.17076 13.227 0.5 8.69887 0.5V2.5Z" fill="#C6C6C6"/>
                        </svg>
                        <input className={classes.header__input} type="text" placeholder="Искать посты" />
                    </div>
                    
                    {isAuth ? 
                        <div className={classes.controle__panel}>
                            <div className={classes.post__controle}>
                                <div className={classes.notificaton}>
                                    <img src={bell} alt="icon" />
                                </div>
                                <div className={classes.create}>
                                    <img src={add} alt="icon" />
                                    <span>Создать</span>
                                </div>
                            </div>
                            <div className={classes.profile}>
                                <img src={avatar} alt="avatar" />
                                <span>Frank</span>
                            </div>
                        </div>
                    :
                     <div className={classes.auth__block}>
                        <div className={classes.reg}>Регистрация</div>
                        <div 
                            className={classes.log}
                            onClick={handleOk}
                        >Вход</div>
                     </div>
                    }


                </div>
            </div>
        </header>
    )
}