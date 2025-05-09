const day1 = input => {
  const [leftNums, rightNums] = parseData(input);
  return {
    part1: part1(leftNums, rightNums),
    part2: part2(leftNums, rightNums),
  };
};

const parseData = input => 
  input.split('\n').reduce((acc, line) => {
    const [a, b] = line.split(' ').map(Number).filter(Boolean);
    acc[0].push(a);
    acc[1].push(b);
    return acc;
  }, [[], []]);

const part1 = (leftNums, rightNums) => {
  leftNums.sort((a, b) => a - b);
  rightNums.sort((a, b) => a - b);
  return leftNums.map((num, i) => Math.abs(num - rightNums[i])).reduce((acc, num) => acc + num, 0);
};

const part2 = (leftNums, rightNums) => {
  const freqRight = rightNums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  const freqLeftInRight = leftNums.map(num => freqRight[num] || 0);
  return leftNums.map((num, i) => num * freqLeftInRight[i]).reduce((acc, num) => acc + num, 0);
};

export default day1;