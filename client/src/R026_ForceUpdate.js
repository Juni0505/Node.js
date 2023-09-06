import React,{Component} from "react";

class R026_ForceUpdate extends Component{
  constructor(props) {
    super(props);
    this.state = {
      StateString : 'react',
    }
  }
  StateChange = () => {
    this.state.StateString = '리액트';
    this.forceUpdate();
    // state만 수정했을시에 클릭하면 값이 변해져있지만 해당 내용이 표시가되진않지만,
    // forceUpdate까지 했을경우 그 해당 값이 업데이트되면서 바뀐다.
    // setState() 랑 동일한값을 가진다.
  }

  render(){
    return(
      <div style={{padding: "0px"}}>
        <button onClick={(e) => this.StateChange(e)}>
          state 직접 변경</button><br/>
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    )
  }
}
export default R026_ForceUpdate;