import React from 'react'
import { Comments } from '../Components/Comments'
import { Navbar } from '../Components/Navbar'
import { Post } from '../Components/Post'
import { SimilarPosts } from '../Components/SimilarPosts'
import { getComment, getPost } from '../utils/api'

export default function PostDetail() {

    const [post, setPost] = React.useState(false)
    const [comment, setComment] = React.useState(false)


    React.useEffect(()=>{
        getPost().then ((res) => {
            setPost(res)
        })
        getComment().then ((res) => {
            setComment(res)
        })

    }, [])




  return (
    <>
         <div className="container__body">
          <Navbar></Navbar>
          <Post post={post}></Post>
          <Comments comment={comment}></Comments>
        </div>
        <SimilarPosts />
    </>
  )
}
