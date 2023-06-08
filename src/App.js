import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

function App() {

  const [content, setContent] = useState();
  const [name, setName] = useState('кто-то');
  const [welcome, setWelcome] = useState('Добрый день');

  return (
    <div className="App">

      <button onClick={()=>setForm(true)}>Показать форму</button>
      {content}
      {welcome}, {name}!

    </div>
  );
  
  function setForm(visible) {
    setContent( visible ? <form>
      <input placeholder='Имя' onChange={change}></input>
      <select onChange={changeWelcome}>
        <option value="" selected disabled hidden>время суток</option>
        <option value={'Добрый день'}>день</option>
        <option value={'Добрый вечер'}>вечер</option>
        <option value={'Доброе утро'}>утро</option>
      </select>
      <button onClick={()=>setForm(false)}>Отмена</button>
    </form> : null )
  };

  function change(event) {
    setName(event.target.value)
  }
  function changeWelcome(event) {
    setWelcome(event.target.value)
  }

}


export default App;
