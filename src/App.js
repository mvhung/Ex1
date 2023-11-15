import React from 'react';
import TestCase from './components/TestCase';

function findMostFrequentLength(arr) {
    arr = arr.split(',').map((item) => item.trim());
    if (!arr || arr.length === 0) {
      return [];
    }
    
    const lengthCountMap = {};
    
    arr.forEach((str) => {
      const length = str.length;
      lengthCountMap[length] = (lengthCountMap[length] || 0) + 1;
    });
    
    const maxCount = Math.max(...Object.values(lengthCountMap));
    
    const mostFrequentLengths = arr.filter((str) => lengthCountMap[str.length] === maxCount);
    console.log(arr);

    return mostFrequentLengths;
}

function sumOfTopTwo(arr) {
    arr = arr.split(',').map((item) => parseInt(item.trim(), 10));
    if (!arr || arr.length < 2) {
        return null;
    }

    const sortedArr = arr.sort((a, b) => b - a);

    const sum = sortedArr[0] + sortedArr[1];
    return sum;
}

const App = () => {

    return (
        <div>
            <h1>Ex1</h1>
            <h2>Tìm các phần tử có độ dài xuất hiện nhiều nhất</h2>
            <TestCase inputDefault={'12,23,12,123,1234'} algorithm={findMostFrequentLength}/>
            <TestCase inputDefault={'a, ab, abc, cd, def, gh'} algorithm={findMostFrequentLength}/>
            <TestCase inputDefault={'try another'} algorithm={findMostFrequentLength}/>
            <h2> Tổng 2 số lớn nhất</h2>
            <TestCase inputDefault={'12,23,12,123,1234'} algorithm={sumOfTopTwo}/>
            <TestCase inputDefault={'try another'} algorithm={sumOfTopTwo}/>
        </div>
    );
};

export default App;
