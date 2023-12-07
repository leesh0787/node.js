
# 🍓 jsx문법

https://react.dev/learn#writing-markup-with-jsx


- 컴포넌트의 return()에서는 반드시 하나의 태그로 싸여있어야한다
- 태그대신 <> </> Fragment를 사용할수 있다.
- Class명을 ClassName = "Class명"
- javaScript코드를 JSX 문법안에서 사용해야할때는 {javaScript 코드}형식으로 사용해야한다.
- {} 을 사용하지 않으면 변수가 그냥 문자로 출력된다.
- 인라인스타일로 CSS를 작성할때 ==> 밖의 {}는 자바스크립트를 사용한다는 의미, 안의 {}는 객체를 사용한다는 의미
  "<div  style={{width:'300px', height:'200px'}}>추가하기</div>"

```
import './App.css';

function App() {
  const name = "강아지";
  return (
    <>
    <div className="App">
      <p>{`${name} 시작하기`}</p>
    </div>
    <div  style={{width:'300px', height:'200px'}}>추가하기</div>
    </>
  );
}

export default App;
```
