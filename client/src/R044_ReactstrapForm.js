import React,{Component} from "react";
import { Form, Label, Input,Row,Col,FormGroup } from "reactstrap";

class R044_ReactstrapFrom extends Component{
  render(){
    return(
      <Form>
        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="sm">
          <option>no select</option>
          <option>woman</option>
          <option>woman</option>
        </Input>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for ="exampleMobile">mobile</Label>
              <input type="text" name="mobile" id="mobile"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <label for="exampleAge">age</label>
              <input type="text" name="age" id="age"/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default R044_ReactstrapFrom;