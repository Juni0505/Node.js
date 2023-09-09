import React,{Component} from "react";

class R068_onMouseMove extends Component {
  MouseMove(tag) {
    console.log('Tag : ' + tag);
  }
  render() {
    return (
      <>
        <div onMouseMove={e => this.MouseMove("div")}>
          <h3>DIV onMouseMove</h3>
        </div>
        <input type="text" onMouseMove={}
      </>
    )
  }
}