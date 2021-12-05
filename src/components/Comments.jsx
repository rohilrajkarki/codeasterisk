import React from 'react'

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((c) => {
        const { postId, id, name, email, body } = c

        return <p key={id}> {name}</p>
      })}
    </div>
  )
}

export default Comments
