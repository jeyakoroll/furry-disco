import React, { useState, useEffect } from 'react';
import Hello from './Hello';
import {useForm} from './useForm';
import { useFetch } from './useFetch';

const App = () => {
  const [values, setValues] = useForm({name: '', password: '', email: ''});
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  // http://numbersapi.com/43/trivia

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])

  return (
    <div className='content_center'>
      <div>{!data ? 'loading...' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />} */}
      <input className='content_center-item' value={values.name} onChange={setValues} name='name' type="name"/> 
      <input className='content_center-item'value={values.password} onChange={setValues} name='password' type="password"/>
      <input className='content_center-item' value={values.email} onChange={setValues} name='email' type="email"/>
    </div>
  )
}

export default App;
