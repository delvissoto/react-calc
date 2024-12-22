import React, { useState } from 'react';


const Calculator = () => {
  const [result, setResult] = useState('');
  
  const handleClick = (value) => {
    setResult((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString()); // Be cautious with eval in real-world apps!
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" className="calculator-display" value={result} readOnly />
      <div className="calculator-buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
