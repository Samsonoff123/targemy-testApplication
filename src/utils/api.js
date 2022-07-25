import axios from 'axios'

export const getPost = async () => {
    const { data } = await axios.get('https://api.stage.targemy.com/v1/post/5')
    return data
}

export const getComment = async () => {
    const { data } = await axios.get('https://api.stage.targemy.com/v1/comments?filter%5Buser_id%5D=8&expand=post,card&sort=id')
    return data
}