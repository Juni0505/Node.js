import React,{Component, PureComponent} from "react";

class R028_PureComponentClass extends PureComponent{
  constructor (props){
    super(props);
    this. state={
      StateString : 'react' ,
      StateArrayObj : ['react' , {react:'200'}]
    }
  }

  buttonClick = (type) => {
    if(type === 'String'){
      this.setState({StateString : 'react'});
    }else{
      this.setState({StateArrayObj : ['react', {react:'200'}]});
    }
  }

  render() {
    console.log('render() 실행');
    return(
      <div>
        <button onClick={e => this.buttonClick('String')}>문자열 반환</button>
        {/* 컴포넌트에서 값이 변경되면 render가 호출되는게 일반적이지만
        PureComponent에서는 값이 같으면 render를 호출하지않고 변수가 선언된다. */}
        <button onClick={e => this.buttonClick('ArrayObject')}>
          {/* 해당 부분은 값이 달라 render가 호출되는 모습이 나타남. */}
          객체 배열 변경
        </button>

      </div>
    )
  }
}
export default R028_PureComponentClass;