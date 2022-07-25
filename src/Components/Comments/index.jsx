import React from "react";
import classes from './MyComments.module.css'
import discussion from '../../image/discussion.png'
import author from '../../image/avatar.png'
import { Skeleton, List, Avatar } from "antd";

export const Comments = (comment) => {

    let isLoading = false

    if (comment.comment) {
        isLoading = true
    }

    function GetDate (commentDate) {
        const date = new Date(commentDate)
        const TodayDate = new Date()
 
        var days = parseInt((TodayDate - date) / (1000 * 60 * 60 * 24));

        return days
    }

    const [CommentLength, setCommentLength] = React.useState(2)
    const ref = React.useRef()
    
    const showMoreComents = () => {
        setCommentLength(CommentLength+2)
        if(CommentLength+2 > comment.comment._meta.totalCount) {
            ref.current.style.display = "none"
        }
    }

    return (
        <div className={classes.comments__main}>
            {
                isLoading ? 
                
                <>
                    <div className={classes.comments__count}>
                        <img src={discussion} alt="discussion" />
                        <span>{comment.comment._meta.totalCount} комментариев</span>
                    </div>
                    <input className={classes.comment__input} type="text" placeholder="Написать комментарий" />
                    {comment.comment.items.slice(0, CommentLength).map(e => (
                        <div className={classes.comments__block} key={e.id}>
                            <div className={classes.comments__element}>
                                <div className={classes.element}>
                                    <div className={classes.author}>
                                        <img src={author} alt="author" />
                                            <div className={classes.discribtion__flex}>
                                                <div className={classes.discribtion}>
                                                    <span className={classes.name}>Benedita Tavares</span>
                                                    <span className={classes.mins}>{GetDate(e.date_create.split(' ')[0])} days ago</span>
                                                </div>
                                                <div className={classes.dots}>
                                                    <div className={classes.element}></div>
                                                    <div className={classes.element}></div>
                                                    <div className={classes.element}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.text}>
                                            {e.content}
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ))}
                    <div onClick={showMoreComents} className={classes.showMore} ref={ref}>Показать еще</div>
                </>
                : 
                    <>
                        <Skeleton style={{marginTop: '20px', marginBottom: '20px'}} active={true} avatar>
                        <List.Item.Meta
                            avatar={<Avatar />}
                        />
                        </Skeleton>
                        <Skeleton style={{marginTop: '20px', marginBottom: '20px'}} active={true} avatar>
                        <List.Item.Meta
                            avatar={<Avatar />}
                        />
                        </Skeleton>
                        <Skeleton style={{marginTop: '20px', marginBottom: '20px'}} active={true} avatar>
                        <List.Item.Meta
                            avatar={<Avatar />}
                        />
                        </Skeleton>
                        <Skeleton style={{marginTop: '20px', marginBottom: '20px'}} active={true} avatar>
                        <List.Item.Meta
                            avatar={<Avatar />}
                        />
                        </Skeleton>
                    </>
            }
        </div>
    )
}