import React from 'react'
import classes from './SimilarPosts.module.css'
import profile_background from '../../image/profile_background_cover.png'
import avatar from '../../image/avatar.png'
import channel from '../../image/target.png'
import gradeLike from '../../image/gradeLike.png'
import grandShare from '../../image/grandShare.png'
import grandComment from '../../image/grandComment.png'
import Like from '../../image/icon_like_normal.png'
import Comment from '../../image/icon_comment_normal.png'
import Share from '../../image/icon_share_normal.png'


export const SimilarPosts = () => {
    let arr = [1, 2, 3, 4]
  return (
    <div className="container">
        <div className={classes.posts__main}>
            <span className={classes.main__text}>Похожие посты</span>
            <div className={classes.post__dflex}>

                {arr.map(e=>

                <div key={e} className={classes.post__item}>
                    <div className={classes.member__info}>
                        <img src={avatar} alt="avatar" className={classes.avatar} />
                        <div className={classes.discribtion}>
                            <span>Joslin Rodgers</span>
                            <div className={classes.tag}>Цель</div>
                        </div>
                    </div>

                    <div className={classes.post__info}>
                        <span className={classes.days}>2 day ago</span>
                        <div className={classes.channel}>
                            <img src={channel} alt="channel" />
                            <span className={classes.channel__name}>Книга «Дом у моря»</span>
                        </div>
                        <span className={classes.channel__text}>Certe, inquam, pertinax non fuisse torquem detraxit hosti...</span>
                        <div className={classes.bottom__side}>
                            <div className={classes.members}>
                                <div className={classes.members__element}>
                                    <img className={classes.member__avatar} src={avatar} alt="member" />
                                    <img className={classes.gradeLike} src={gradeLike} alt="grade" />
                                </div>
                                <div className={classes.members__element}>
                                    <img className={classes.member__avatar} src={avatar} alt="member" />
                                    <img className={classes.gradeLike} src={grandShare} alt="grade" />
                                </div>
                                <div className={classes.members__element}>
                                    <img className={classes.member__avatar} src={avatar} alt="member" />
                                    <img className={classes.gradeLike} src={grandComment} alt="grade" />
                                </div>
                            </div>
                            <div className={classes.grade__block}>
                                <div className={classes.grade__block__element}>
                                    <img src={Like} alt="gradeIcon" />
                                    <span>256k</span>
                                </div>
                                <div className={classes.grade__block__element}>
                                    <img src={Comment} alt="gradeIcon" />
                                    <span>256k</span>
                                </div>
                                <div className={classes.grade__block__element}>
                                    <img src={Share} alt="gradeIcon" />
                                    <span>256k</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src={profile_background} className={classes.profile_background} alt="bg" />
                </div>
                )}

            </div>
        </div>
    </div>

  )
}
