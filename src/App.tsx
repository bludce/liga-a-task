import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'

import { IPost, IUser } from './interfaces'

import List from './components/List'
import SearchBar from './components/SearchBar'

const Section = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 15px;
`

const App: React.FC = () => {

  const [posts, setPosts] = useState<IPost[]>([])
  const [users, setUsers] = useState<IUser[]>([])
  const [filteredPosts, setfilteredPosts] = useState<IPost[]>([])

  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/users')
    ])
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(jsonObjects => {
      setPosts(jsonObjects[0])
      setUsers(jsonObjects[1])
      setfilteredPosts(jsonObjects[0])
    });
  }, [])

  const filterPosts = (filter: string): void => {
    if (filter.length === 0) {
      setfilteredPosts(posts)
    } else {
      const filterPost = filteredPosts.filter((post) => {
        let postName = post.title.toLowerCase() + post.title.toLowerCase()
        return postName.indexOf(filter.toLowerCase()) !== -1
      })
      setfilteredPosts(filterPost)
    }
  }

  return (
    <Section>
      <SearchBar filterPosts={filterPosts}/>
      <List posts={filteredPosts} users={users} />
    </Section>
  );
}

export default App;
