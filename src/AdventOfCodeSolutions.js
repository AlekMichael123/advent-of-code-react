import { useState } from 'react';
import './AdventOfCodeSolutions.css';
import Solution from './components/Solution';
import InputArea from './components/InputArea';
import { useEffect, useMemo } from 'react';

function AdventOfCodeSolutions() {
  const [day, setDay] = useState(1);
  const [input, setInput] = useState('');
  
  const memoizedState = useMemo(() => {
    const savedDay = localStorage.getItem('day');
    const savedInput = localStorage.getItem('input');
    return {
      day: savedDay ? parseInt(savedDay, 10) : 1,
      input: savedInput || '',
    };
  }, []);

  useEffect(() => {
    setDay(memoizedState.day);
    setInput(memoizedState.input);
  }, [memoizedState]);

  useEffect(() => {
    localStorage.setItem('day', day);
    localStorage.setItem('input', input);
  }, [day, input]);


  return (
    <div>
      {/* Nav Bar For Selecting Solutions */}
      <nav>
        {/* drop down for selecting a day between 1-25 */}
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          {Array.from({ length: 25 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Day {i + 1}
            </option>
          ))}
        </select>
        <InputArea
          value={input}
          onChange={setInput}
          onSubmit={() => {
            // Handle submit logic here
            console.log(input);
          }}
          day={day}
        />
      </nav>
      {/* Content for Solutions i.e. input select (state for AdventOfCodeSolutions), visualizing solution (in solution component) */}
      
      <Solution input={input} day={day} />

    </div>
  );
}

export default AdventOfCodeSolutions;
