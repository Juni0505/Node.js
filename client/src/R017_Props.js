import React,{Component} from "react";

class R017_Props extends Component{
  render(){
    let props_value = this.props.props_val;
    console.log(this);
    props_value += ' from App.js'
    console.log(props_value);
    return (
      <div>{props_value}</div>
    )
  }
}

export default R017_Props;