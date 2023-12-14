import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

//usestate라는 함수를 통해 react에게 값이 변했음을 알려주는 방법(usestate는 react가 제공하는 react hook)
function App() {
  let counter = 0;
  console.log(useState(0));

  const [num,setNum] = useState(0)
  //0은 매개변수 num 의 초기값이 0이다
  //[초기값인0, 초기값을 변화시키는 함수]
  //state를 바꾸면 UI를 다시 랜더링한다.
  //함수가 끝날때 실행이 되는것이다.

  const increase = function () {
    counter = counter + 1;
    setNum(num + 1)

    console.log(counter)
    console.log("num :" + num) //state는 함수가 끝나면 바뀌기 때문에 아직 바뀌기 전 상태이다
  };
  return (
    <>
      <div>{`num = ${num}`}</div>
      <div>{`counter = ${counter}`}</div>
      <button onClick={increase}>click</button>
    </>
  );
}

export default App;
