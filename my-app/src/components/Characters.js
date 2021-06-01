import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export class Characters extends Component {
  render() {
    return (<Container><Row>
      {this.props.charsData.map((obj) => {
      return (
        // render all data that we got from our backend after we passed it in home page.
        <Col lg>
          <button onClick={(e)=>this.props.addFavorite(obj)} style={{margin:"5px"}}>Save to favorites</button>
          <h1>{obj.name}</h1>
          <p>{obj.gender}</p>
          <img src={obj.img} style={{height: "350px", margin:"10px"}}></img>
          <Container style={{backgroundColor:"rgb(35 40 40)"}}>
          <Row>
            {obj.psiPowers.map((power) => {
              return (
                <Col>

                  <img src={power.img} style={{height: "84px", margin:"5px"}}></img>
                  <p>{power.name}</p>
                </Col>
              );
            })}
          </Row>
          </Container>
          </Col>
      );
    })}
    </Row></Container>)
  }
}

export default Characters;
