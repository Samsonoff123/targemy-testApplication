import React from "react";
import classes from './MyPost.module.css'
import author from '../../image/avatar.png'
import { Avatar, Skeleton, Space, List } from "antd";

export const Post = ({post}) => {


    function GetDate () {
        const postDate = new Date(post.date_update.split(' ')[0])
        const TodayDate = new Date()

        var days = parseInt((TodayDate - postDate) / (1000 * 60 * 60 * 24));

        return days
    }

    const ref = React.useRef()

        
    if (ref.current) {
        ref.current.innerHTML = ref.current.innerText
    }
    
    
    return (
        <div className={classes.post__main}>
            {
                post ? 
                <>
                    <img className={classes.post__img}  src={post.photo_cover} alt="postImage" />
                    <div className={classes.post__body}>
                        <div className={classes.author}>
                            <img src={author} alt="author" />
                            <div className={classes.discribtion__flex}>
                                <div className={classes.discribtion}>
                                    <span className={classes.name}>Benedita Tavares</span>
                                    <span className={classes.follows}>785 followers</span>
                                </div>
                                <div className={classes.dots}>
                                    <div className={classes.element}></div>
                                    <div className={classes.element}></div>
                                    <div className={classes.element}></div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.post__information}>
                            <div className={classes.time}>
                                <span>{GetDate()} дней назад</span>
                                <span>4 мин на чтение</span>
                            </div>
                            <div className={classes.edit}>редактировать</div>
                        </div>
                        <div className={classes.post__title}>{post.title}</div>

                        <div className={classes.post__text} ref={ref} id="place__text">
                            {post.content}
                        </div>

                    </div>
                    <div className={classes.post__bottom}>
                        <div className={classes.element}>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5 18.7H0V9.9H6.5V18.7ZM22.9732 10.2263C22.9024 9.61869 22.4234 8.20119 20.8219 8.26719C19.7114 8.31302 17.6043 8.679 16.417 8.04925C17.2363 4.69792 17.0391 0 14.8905 0C13.449 0 13.1759 1.65642 12.7428 3.17992C11.6386 7.06842 9.74772 8.6955 7.6 9.49117V19.4627C11.5627 20.1053 13.3378 22 17.0997 22C19.9917 22 21.1954 20.347 21.5282 19.6736C21.8611 19.0001 21.9898 18.4719 22.2079 17.4931C22.5842 15.8045 22.9481 12.8006 22.9732 12.2243C22.9905 11.8259 23.0041 11.3461 22.9989 10.9641C22.9948 10.6657 22.9989 10.4472 22.9732 10.2263Z" fill="#FFFFFF"/>
                            </svg>
                            <span className={classes.count}>{post.likes}</span>
                        </div>
                        <div className={classes.element}>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.875 0H20.125C21.7107 0 23 1.23313 23 2.74984V15.1241C23 16.6408 21.7107 17.874 20.125 17.874H13.6562L8.04551 21.8999C7.69062 22.1491 7.1875 21.9042 7.1875 21.4831V17.874H2.875C1.28926 17.874 0 16.6408 0 15.1241V2.74984C0 1.23313 1.28926 0 2.875 0ZM4.23684 12.2222C5.23968 12.2222 6.05263 11.4014 6.05263 10.3889C6.05263 9.37637 5.23968 8.55556 4.23684 8.55556C3.23401 8.55556 2.42105 9.37637 2.42105 10.3889C2.42105 11.4014 3.23401 12.2222 4.23684 12.2222ZM13.3158 10.3889C13.3158 11.4014 12.5028 12.2222 11.5 12.2222C10.4972 12.2222 9.68421 11.4014 9.68421 10.3889C9.68421 9.37637 10.4972 8.55556 11.5 8.55556C12.5028 8.55556 13.3158 9.37637 13.3158 10.3889ZM18.7632 12.2222C19.766 12.2222 20.5789 11.4014 20.5789 10.3889C20.5789 9.37637 19.766 8.55556 18.7632 8.55556C17.7603 8.55556 16.9474 9.37637 16.9474 10.3889C16.9474 11.4014 17.7603 12.2222 18.7632 12.2222Z" fill="url(#paint0_linear_180_99)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_180_99" x1="22.5575" y1="0.21165" x2="0" y2="0.21165" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#F5F4FF"/>
                                        <stop offset="1" stopColor="#D2E7FF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className={classes.count}>0</span>
                        </div>
                        <div className={classes.element}>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6208 9.38428L15.3575 16.5758C14.5919 17.3339 13.3158 16.7718 13.3158 15.6531V11.8473C6.02363 11.8986 2.94733 13.7043 5.00477 20.9093C5.23089 21.7011 4.35684 22.3142 3.7435 21.8257C1.77806 20.2604 0 17.2662 0 14.2439C0 6.63185 5.93153 5.1213 13.3158 5.07836V1.26988C13.3158 0.150098 14.5927 -0.410161 15.3575 0.347146L22.6208 7.53882C23.1262 8.03926 23.1266 8.88341 22.6208 9.38428Z" fill="url(#paint0_linear_9_747)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_9_747" x1="22.5575" y1="0.21165" x2="0" y2="0.21165" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#F5F4FF"/>
                                        <stop offset="1" stopColor="#D2E7FF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className={classes.count}>0</span>
                        </div>
                    </div>
                    <div className={classes.additionally__info}>
                        <div className={classes.author}>
                            <img src={author} alt="author" />
                            <div className={classes.discribtion__flex}>
                                <div className={classes.discribtion}>
                                    <span className={classes.name}>Benedita Tavares</span>
                                    <span className={classes.follows}><span>Follow + </span><span> 785 followers</span></span>
                                </div>
                            </div>
                        </div>
                        <span className={classes.additionally__content}>Probabo, inquit, sic agam, ut dolore suo sanciret militaris imperii disciplinam exercitumque in gravissimo bello animadversionis metu contineret, saluti prospexit civium, qua sd intellegebat continer.</span>
                    </div>
                </>

                : 
                <>
                    <Space style={{width:'100%'}}>
                        <Skeleton.Image style={{width:'460px', height:'685px'}} active={true} />
                    </Space>
                    <Skeleton style={{marginTop: '20px', marginBottom: '20px'}} active={true} avatar>
                        <List.Item.Meta
                            avatar={<Avatar />}
                        />
                    </Skeleton>
                    <Skeleton active />
                </>

            }

        </div>
    )
}