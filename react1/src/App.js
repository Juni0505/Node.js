import './App.css';
// import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {useState} from 'react';

// url mapping 페이지 구성
// 나타낼 속성들을 모아서 entity 별로 묶기
// 이름, 가격, 단위 == 과일
// TODO delete - 목록화면에서 버튼 만들어서 1개 삭제
// TODO info - id 활용해서 보기

function App() {
  // const [a1,setA1] = useState([10,20,30]);

  const [fruitList, setFruitList] = useState(
    [
      {
        id : 1,
        name : '기본이름1',
        price : '기본값1',
        count : '기본단위1'
      },
      {
        id : 2,
        name : '기본이름2',
        price : '기본값2',
        count : '기본단위2'
      }
    ]
  );
  // fruit 이름의 저장공간 생성 선언
  const [fruit, setFruit] = useState(
    {
      name : '',
      price : '',
      count : ''
    }
  )

  const insertHandler = () => {
    console.log("insertHandler 함수 실행");
    console.log(fruit);
    // 기존 fruitList에 동일한 것이 없다면 추가
    // 유효성 검사
    if(!fruit.name || !fruit.price || !fruit.count){
      alert("모든값을 입력해주세요.")
      return;
    }
    // 유효성 검사 - 같은 name없도록
    const isExist = fruitList.some((fruit)=>fruit.name == fruit.name );
    if(isExist){
      alert("이미 등록된 과일입니다. 다시 등록해주세요.");
      
      return;
    }
    setFruitList([...fruitList, fruit]);
  }
  const onClickDeleteHandler = (name) => {
    console.log(name);
    const filterfruit = fruitList.filter((fruit)=> 
    fruit.name != name);
    setFruitList(filterfruit)
  }
  const onChangeInput = (e) => {
    console.log(e.target);
    const {name, value} = e.target;
    setFruit({...fruit, [name]:value})
  }
  const List = (props) => {
    // const n1 = props.n1;
    // const {n1} = props;
    // const {n2} = props;
    // const { n1, n2 } = props;
    // console.log(n1);
    // console.log(n2);
    return (
      <>
        <h1>리스트</h1>
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/insert">과일추가</Link></li>
          </ul>
        </nav>
        <table>
          <thead>
            <tr>
              <td>이름</td>
              <td>가격</td>
              <td>단위</td>
            </tr>
          </thead>
          <tbody>
            {fruitList.map((fruit)=>{
              console.log(fruit);
              return(
                <tr>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
                <td>{fruit.count}</td>
                <td><button onClick={()=>(onClickDeleteHandler(fruit.name))}>삭제</button></td>
              </tr>
              )
            })}
           
          </tbody>
        </table>
      </>
    )
  }
  const InsertFruit = () => {
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
          </form>
        </div>
      </>
    )
  }
  

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/insert' element={<InsertFruit />} />
          <Route path='/delete' element="" />
          <Route path='/info' element="" />
          <Route path='/update' element="" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
function Home() {
  return (
    <>
      <h1>홈</h1>
      <nav>
        <ul>
          <li><Link to="/list">과일목록보기</Link></li>
          <li><Link to="/insert">과일추가</Link></li>
        </ul>
      </nav>
    </>
  )
}
// const f1 = function (data, a) { console.log(); }
// const f2 = (data, a) => { console.log(); }
// const f3 = data => { console.log(); }
// const f4 = data => console.log();
// const f5 = () => console.log();



export default App;
