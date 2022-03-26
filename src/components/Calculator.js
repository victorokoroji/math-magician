import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.innerText));
  };

  const { total, next, operation } = state;
  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="screen">
          {total}
          {next}
          {operation}
        </div>
      </div>
      <div className="keyboard">
        <Button onClick={handleClick}>AC</Button>
        <Button onClick={handleClick}>+/-</Button>
        <Button onClick={handleClick}>%</Button>
        <Button onClick={handleClick} className="orange">
          ÷
        </Button>
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick} className="orange">
          x
        </Button>
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleClick} className="orange">
          -
        </Button>
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button>
        <Button onClick={handleClick} className="orange">
          +
        </Button>
        <Button onClick={handleClick} id="zero">
          0
        </Button>
        <Button onClick={handleClick}>.</Button>
        <Button onClick={handleClick} className="orange">
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
