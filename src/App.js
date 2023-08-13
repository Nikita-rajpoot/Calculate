import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [isScientificMode, setScientificMode] = useState(false);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input).toString();
      setResult(calculatedResult);
      setHistory([...history, { input, result: calculatedResult }]);
    } catch (error) {
      setResult('Error');
    }
  };

  const toggleScientificMode = () => {
    setScientificMode(!isScientificMode);
  };

  const handleFunctionClick = (func) => {
    setInput(func + '(');
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="calculator">
      <div className="display">
        {result !== '' ? result : input}
      </div>
      <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.input} = {item.result}
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons">
      {isScientificMode ? (
          <button onClick={() => handleFunctionClick('Math.sin')}>sin</button>
        ) : null}
        {/* ...existing buttons */}
        <button onClick={handleCalculate}>=</button>
        {/* ...existing buttons */}
        <button onClick={toggleScientificMode}>
          {isScientificMode ? 'Basic Mode' : 'Scientific Mode'}
        </button>
        <button onClick={clearHistory}>Clear History</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
