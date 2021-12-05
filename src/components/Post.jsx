import React, { useState } from 'react'
import styled from 'styled-components'
import Comments from './Comments'

const Post = ({ id, userId, title, body, comments }) => {
  const [expand, setExpand] = useState(false)

  return (
    <Wrapper>
      <div className='ids'>
        <h3>
          UserId:<span className='id'>{userId}</span>
        </h3>
        <h4>
          Post Id: <span className='id'>{id}</span>
        </h4>
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
      {/* <Link to='/comment'>Comments</Link> */}
      <button onClick={() => setExpand(!expand)}>{expand ? '-' : '+'}</button>
      {expand && <Comments comments={comments}></Comments>}
    </Wrapper>
  )
}

export default Post

const Wrapper = styled.div`
  border: 1px solid tomato;

  .ids {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    color: blue;
  }
  .id {
    padding: 0 5px;
    color: purple;
  }
  h4 {
    color: teal;
  }
  h2 {
    text-align: center;
    color: #db37db;
  }
  p {
    line-height: 1.2rem;
  }
`
