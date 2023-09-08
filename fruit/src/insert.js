import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function InsertFruit({ fruitList, setFruitList }) {

  // fruit 이름의 저장공간 생성 선언
  const [fruit, setFruit] = useState(
    {
      id : '',
      name : '',
      price : '',
      count : ''
    }
  );

  var insertHandler = () => {
    console.log("insertHandler 함수 실행");
    console.log(fruit);
    // 기존 fruitList에 동일한 것이 없다면 추가
    // 유효성 검사
    if(!fruit.name || !fruit.price || !fruit.count){
      alert("모든값을 입력해주세요.")
      return;
    }
    // 유효성 검사 - 같은 name없도록
    // const isExist = fruitList.some((fruit)=>fruit.name == fruit.name );
    // if(isExist){
    //   alert("이미 등록된 과일입니다. 다시 등록해주세요.");
      
    //   return;
    // };
    const updatedFruitList = [...fruitList, fruit];
    setFruitList(updatedFruitList);
  }

  const onChangeInput = (e) => {
    console.log(e.target);
    const {name, value} = e.target;
    setFruit({...fruit, [name]:value})
  }
  
  return (
    <>
      <h1>과일추가</h1>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/list">과일목록보기</Link></li>
        </ul>
      </nav>
      <div>
        <form>  
          <div>
            <span>이름 : </span><input type='text' onChange={onChangeInput} name='name' value={fruit.name}></input>
          </div>
          <div>
            <span>가격 : </span><input type='text' onChange={onChangeInput} name='price' value={fruit.price}></input>
          </div>
          <div>
            <span>단위 : </span><input type='text' onChange={onChangeInput} name='count' value={fruit.count}></input>
          </div>
          <div>
            <button onClick={insertHandler}>추가</button>
          </div>
          {/* <List/> */}
        </form>
      </div>
    </>
  )
}
export default InsertFruit;