import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class home extends Component {
  render() {
    return (
      <>
        <h1>fruit 가게</h1>
        <ul>
          <li>
            <Link to={'/list'}>과일 목록</Link>
          </li>
          <li>
            <Link to={'/insert'}>과일 추가</Link>
          </li>
          <li>
            <Link to={'/delete'}>과일 삭제</Link>
          </li>
        </ul>
      </>
    )
  }
}
export default home;