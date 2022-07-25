import React from "react";
import classes from './MyNavbar.module.css'
import avatar from '../../image/avatar.png'
import Feed from '../../image/My Feed.png'
import Trends from '../../image/Trends.png'
import Bookmark from '../../image/Bookmark.png'
import NewPost from '../../image/New Post.png' 
import Notification from '../../image/Notification.png'
import Mycards from '../../image/My cards.png'


export const Navbar = () => {

    return (
        <div className={classes.navbar__main}>
            <div className={classes.profile}>
                <img src={avatar} alt="avatar"/>
                <div className={classes.discribtion}>
                    <span className={classes.name}>Frank Boehn</span>
                    <span className={classes.type}>профиль</span>
                </div>
            </div>
            <div className={classes.navbar__group}>
                <div className={classes.navbar__element}><img src={Feed} alt="icon" /> Лента</div>
                <div className={classes.navbar__element}><img src={Trends} alt="icon" /> Тренды</div>
                <div className={classes.navbar__element}><img src={Bookmark} alt="icon" /> Закладки</div>
            </div>
            <div className={classes.navbar__group}>
                <div className={classes.navbar__element}><img src={NewPost} alt="icon" /> Создать пост</div>
                <div className={classes.navbar__element}><img src={Notification} alt="icon" /> Уведомления</div>
                <div className={classes.navbar__element}><img src={Mycards} alt="icon" /> Мои карточки</div>
            </div>
            
        </div>
    )
}