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

  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/users')
    ])
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(jsonObjects => {
      setPosts(jsonObjects[0])
      setUsers(jsonObjects[1])
    });
  }, [])

  return (
    <Section>
      <SearchBar />
      <List posts={posts} users={users} />
    </Section>
  );
}

export default App;
