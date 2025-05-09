import { useEffect, useState } from "react";
import { solutions } from "../solutions2024";
import "./styles/Solution.css"; 

const Solution = ({ input, day }) => {
  const [result1, setResult1] = useState("No solution available");
  const [result2, setResult2] = useState("No solution available");

  useEffect(() => {
    if (input && solutions[day]) {
      const { part1, part2 } = solutions[day](input);
      
      if (part1 !== undefined) setResult1(part1);
      else setResult1("No solution available");
      
      if (part2 !== undefined) setResult2(part2);
      else setResult2("No solution available");
    } else {
      setResult1("No solution available");
      setResult2("No solution available");
    }
  }, [day, input]);

  return (
    <div className="solution-container">
      <h1>Solution for Day {day}</h1>
      <div className="solution-output">
        <p>Part 1</p>
        <p>{result1}</p>
        <p>Part 2</p>
        <p>{result2}</p>
      </div>
    </div>
  );
};

export default Solution;