import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
    },
    { id: 2, title: "리액트를 공부합시다.", contents: "리액트 노션 보기!!!" },
  ]);

  const [title, setTitle] = useState("");

  const [contents, setContents] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  };

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
      contents,
    };

    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <div className="InputArea">
        <h3 className="title">제목&nbsp;</h3>
        <input className="Input" value={title} onChange={titleChangeHandler} />
        {/* 잘 들어오는지 테스트 */}
        {/* {title} */}
        <h3 className="title">내용&nbsp;</h3>
        <input
          className="Input"
          value={contents}
          onChange={contentsChangeHandler}
        />
        {/* 잘 들어오는지 테스트 */}
        {/* {contents} */}
        <button className="Button" onClick={clickAddButtonHandler}>
          <h3>추가하기</h3>
        </button>
      </div>
      <div className="app-style">
        {todo.map(function (item) {
          return (
            <div key={item.id} className="component-style">
              <h2>{item.title}</h2>
              <p>{item.contents}</p>
              <div className="gapButton">
                <button className="newButton">삭제하기</button>
                <button className="newButton">완료</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
