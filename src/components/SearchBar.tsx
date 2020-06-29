import React, {useState} from 'react';
import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 15px;
  outline: 0;
  border  1px solid #2e2e2e;
  border-radius: 5px;
  font-size: 16px;
`

interface PostSeacrhBarProps {

}

const SearchBar: React.FC<PostSeacrhBarProps> = () => {
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(title)
      setTitle('')
    }
  }

  return (
    <Input 
      onChange={changeHandler}
      value={title}
      type="text" 
      placeholder="Введите название"
      onKeyPress={keyPressHandler}/>
  )
}

export default SearchBar;