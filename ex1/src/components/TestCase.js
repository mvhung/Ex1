import { useState } from 'react';

function validateInput(input) {
  const regex = /^(\w+(,\s*\w+)*)?$/;
  return regex.test(input);
}

function TestCase({ inputDefault, algorithm }) {
  const [input, setInput] = useState(inputDefault);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleRunAlgorithm = () => {
    if (!validateInput(input)) {
      setError('Invalid input format');
      setResult(null);
      return;
    }

    setResult(algorithm(input));
    setError(null);
  };

  return (
    <div className='wrap-algorithm'>
      <label>
        Input Array:
        <input type='text' value={input} onChange={handleInputChange} />
      </label>
      <button onClick={handleRunAlgorithm}>Run</button>


      <div>
        <h2>Result:</h2>
        {error && <p style={{color:'red'}}>{error}</p>}
        <p>{result ? JSON.stringify(result) : ''}</p>
      </div>
    </div>
  );
}

export default TestCase;