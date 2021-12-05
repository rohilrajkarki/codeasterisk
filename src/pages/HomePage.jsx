import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../components/Post'

const HomePage = () => {
  const [data, setData] = useState([])
  const [comments, setComments] = useState([])

  const fetchPost = async () => {
    try {
      const { data: postData } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?fbclid=IwAR0hXFgfk27ndGZ3EMoJ0Ixzal6MHhy82yUaOE8UaGu1WieNhMZFkcjhI_M'
      )
      setData(postData)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchComments = async () => {
    try {
      const { data: commentData } = await axios.get(
        'https://jsonplaceholder.typicode.com/comments?fbclid=IwAR338YestdzYE7t42dXxcUYeL1krHuFLtfTsl7v6LpkNRI1WMw_CrkFYr3I'
      )
      setComments(commentData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [])

  return (
    <div>
      {data.map((d) => {
        const { id, title, userId, body } = d
        const filteredComments = comments.filter((c) => c.postId === id)
        console.log(filteredComments)

        return <Post key={id} {...d} comments={filteredComments} />
      })}
    </div>
  )
}

export default HomePage
