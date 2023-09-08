import React, {Component} from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, button
} from 'reactstrap';

class R040_ReactstrapCard extends Component{
  render() {
    return(
      <div>
        <Card>
          <CardImg top height="200px" src="http://asq.kr/4KkfRxZfR" alt="Card Image"/>
          <CardBody>
            <CardTitle>Card 제목</CardTitle>
            <CardSubtitle>내용 Lorem Ipsum is simply dummy text.</CardSubtitle>
            <button>버튼</button>
          </CardBody>
        </Card>
      </div>
    )
  }
}
export default R040_ReactstrapCard;