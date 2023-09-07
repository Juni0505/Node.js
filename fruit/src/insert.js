import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class insert extends Component {
  render() {
    return (
      <>
        <h1>과일추가</h1>
        <ul>
          <li>
            <Link to={'/list'}>과일 목록</Link>
          </li>
          <li>
            <Link to={'/home'}>메인페이지</Link>
          </li>
          <li>
            <Link to={'/delete'}>과일 삭제</Link>
          </li>
        </ul>
      </>
    )
  }
}
export default insert;
