import React,{Component} from "react";
import { Jumbotron, Button} from 'reactstrap';

class R046_ReactstrapJumbotron extends Component{
  render(){
    return(
      <>
        <Jumbotron style={{backgroundColor: "#D38C7C"}}>
          <h1 className="dispaly-4">React 200</h1>
          <p className="h4">Contrary to popolar belief,
          Lorem Ipsum is not simply random text</p>
          <hr className="my-2"/>
          <p className="lead">
            <Button color="danger">Go Detail</Button>
          </p>
        </Jumbotron>
      </>
    )
  }
}
export default R046_ReactstrapJumbotron;