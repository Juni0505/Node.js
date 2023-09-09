import React,{Component} from "react";

class R066_onClick extends Component{
  buttonClick = (param) => {
    if(typeof param != 'string') param = "Click a"
    console.log('param : ' + param);
  }
  render(){
    return(
      <>
        <button onClick={e => this.buttonClick("click button")}>
          Click Button
        </button>
        <div onClick={e => this.buttonClick("click div")}>click div</div>
        <a href="javascript:" onClick={this.buttonClick}>Click a</a>
      </>
    )
  }
}
export default R066_onClick;