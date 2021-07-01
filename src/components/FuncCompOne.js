import { useState, useEffect } from 'react';
import FuncCompTwo from './FuncCompTwo';

const FuncCompOne = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('useEffect Ran');
    if (count < 5) console.log('my functionality ran');

    return () => {
      console.log('I am unmounting');
    };
  }, [count]);

  return (
    <div className='center'>
      <h1>Functional Component One</h1>
      <div className='one'>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>

        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='message'
        />
        <button onClick={() => setMessage('')}>Clear</button>
      </div>
      <FuncCompTwo count={count} message={message} />
    </div>
  );
};

export default FuncCompOne;
