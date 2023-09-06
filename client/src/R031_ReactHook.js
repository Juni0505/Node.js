import React, {useState, useEffect} from "react";

function R031_ReactHook(props){
  const [contents, setContents] = useState('[THIS IS REACT]');

  useEffect(() => {
    console.log('userEffect');
  });

  return(
    <div style={{padding: "0px"}}>
      <h2>{contents}</h2>
      <button onClick={() => setContents('[This is Hook]')}>버튼</button>
    </div>
  )
}

export default R031_ReactHook;