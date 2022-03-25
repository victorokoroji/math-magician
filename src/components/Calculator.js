import React, { Component } from 'react';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <div className="calculator">
          <div className="screen">0</div>
        </div>
        <div className="keyboard">
          <Button>AC</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Button className="orange">÷</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button className="orange">x</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button className="orange">-</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button className="orange">+</Button>
          <Button id="zero">0</Button>
          <Button>.</Button>
          <Button className="orange">=</Button>
        </div>
      </div>
    );
  }
}

export default Calculator;
