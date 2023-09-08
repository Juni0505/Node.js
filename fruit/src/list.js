import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import InsertFruit from './insert';


function List({ fruitList, setFruitList }) {
  // const n1 = props.n1;
  // const {n1} = props;
  // const {n2} = props;
  // const { n1, n2 } = props;
  // console.log(n1);
  // console.log(n2);

  

  var [fruitList, setFruitList] = useState(
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


  useEffect(() => {
    const storedFruitList = JSON.parse(localStorage.getItem('fruitList'));
    if (storedFruitList) {
      setFruitList(storedFruitList);
    }
  }, []);
  
  // fruitList가 업데이트될 때 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('fruitList', JSON.stringify(fruitList));
  }, [fruitList]);


const onClickDeleteHandler = (name) => {
  console.log(name);
  const filterfruit = fruitList.filter((fruit)=> 
  fruit.name != name);
  setFruitList(filterfruit)
}



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

export default List;