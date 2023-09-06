import React ,{Component}from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component{
  render() {
    let {
      String, Number, Boolean, Array, o1, f1
    } = this.props
    let {
      BooleanTrueFalse
    } = this.props;
    return (
      <div>
      <div style = {{padding:"0px", color:"red"}} >
        <p>StringProps : {String}</p>
        <p>NumberProps : {Number}</p>
        <span>BooleanProps : {Boolean.toString()}</span>
        <p>ArrayProps : {Array.toString()}</p>
        <p>ObjectJsonProps : {JSON.stringify(o1)}</p>
        <p>FunctionProps : {f1}</p>
        </div>
        <div style = {{padding:"0px", color:"red"}} >
          {BooleanTrueFalse ? '2. ' : '1. '}
          {BooleanTrueFalse.toString()};
        </div>
      </div>
    )
  }
}
// R018_PropsDatatype.propTypes = {
//   String : datatype.number,
//   Number : datatype.number,
//   Boolean : datatype.bool,
//   Array : datatype.array,
//   ObjectJson : datatype.object,
//   Function : datatype.func,

// }
export default R018_PropsDatatype;