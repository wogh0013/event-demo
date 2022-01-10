import logo from './logo.svg';
import './App.css';
import ShoppingList from './component/ShoppingList';
import Clock from './component/Clock';

function App() {
  const Data={
    headTitle:"Welcome react",
    contentTitle:"react.js is beautiful",
    contentBody:"It's front end library"
  } //JSON 객체

  return (
    <div>
      <h1>값을 저장하기-데이터 저장</h1>
      <p>{Data.headTitle}</p>
      <p>{Data.contentTitle}</p>
      <p>{Data.contentBody}</p>

      {/*props는 부모 컴포넌트로부터 자식 컴포넌트에 값을 전달하기 위한 객체이다.*/}
      <ShoppingList name="쇼핑" address="인천시 남동구"/>
    </div>
  );
}

export default App;
