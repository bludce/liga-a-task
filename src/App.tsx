import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components'

import List from './components/List'
import SearchBar from './components/SearchBar'

const Section = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 15px;
`

const App: React.FC = () => {
  return (
    <Section>
      <SearchBar />
      <List />
    </Section>
  );
}

export default App;
