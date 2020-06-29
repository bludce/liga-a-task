import React from 'react';
import styled from 'styled-components'

import { IPost, IUser } from '../interfaces'

interface PostListProps {
  posts: IPost[],
  users: IUser[],
}

const List: React.FC<PostListProps> = ({posts, users}) => {
  
  // console.log(posts[0].id)
  return (
    <PostList>
      {posts.map(({id, userId, title, body}) => {
        // const user = users.filter(({ id }) => id === userId)
        // console.log(user.id)
        return (
        <Item key={id}>
          <Title>{title}</Title>
          <Body>{body}</Body>
        <Published>Published: user.username </Published>
        </Item>
        )
      })}
    </PostList>
  )
}

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`

const PostList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`
const Item = styled.li`
  display: block;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #e2e2e2
`

const Body = styled.p`
  font-size: 16px;
  font-weight: 400;
`

const Published = styled.span`
  display: inline-block,
  color: #ccc
  font-size: 12px;
  font-weight: 400;
`

export default List;