const FuncCompTwo = (props) => {
  return (
    <>
    <div>Function Component two</div>
    <div className='two'>
      <h2 className='count'>Count: {props.count}</h2>
      <h2 className='message'>Message: {props.message}</h2>
      </div>
    </>
  );
};

export default FuncCompTwo;
