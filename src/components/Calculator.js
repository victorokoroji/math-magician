import React, { Component } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: null,
      total: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick = (e) => {
  this.setState((state) => calculate(state, e.target.innerText));
}

render() {
  const { total, next, operation } = this.state;
  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="screen">{ total || next || operation}</div>
      </div>
      <div className="keyboard">
        <Button onClick={this.handleClick}>AC</Button>
        <Button onClick={this.handleClick}>+/-</Button>
        <Button onClick={this.handleClick}>%</Button>
        <Button onClick={this.handleClick} className="orange">
          ÷
        </Button>
        <Button onClick={this.handleClick}>7</Button>
        <Button onClick={this.handleClick}>8</Button>
        <Button onClick={this.handleClick}>9</Button>
        <Button onClick={this.handleClick} className="orange">
          x
        </Button>
        <Button onClick={this.handleClick}>4</Button>
        <Button onClick={this.handleClick}>5</Button>
        <Button onClick={this.handleClick}>6</Button>
        <Button onClick={this.handleClick} className="orange">
          -
        </Button>
        <Button onClick={this.handleClick}>1</Button>
        <Button onClick={this.handleClick}>2</Button>
        <Button onClick={this.handleClick}>3</Button>
        <Button onClick={this.handleClick} className="orange">
          +
        </Button>
        <Button onClick={this.handleClick} id="zero">
          0
        </Button>
        <Button onClick={this.handleClick}>.</Button>
        <Button onClick={this.handleClick} className="orange">
          =
        </Button>
      </div>
    </div>
  );
}
}

export default Calculator;
