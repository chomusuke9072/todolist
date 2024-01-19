import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: uuid(),
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: uuid(),
      title: "리액트를 공부합시다.",
      contents: "리액트 노션 보기!!!",
      isDone: true,
    },
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
      id: uuid(),
      title,
      contents,
      isDone: false,
    };

    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <header></header>
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
          <p>추가하기</p>
        </button>
      </div>
      <div>
        <h2>할 일 목록!</h2>
      </div>
      <div className="app-style">
        {todo
          .filter((todo) => todo.isDone === false)
          .map(function (item) {
            return (
              <div key={item.id} className="component-style">
                <h2>
                  {item.title}
                  {item.id}
                </h2>
                <p>{item.contents}</p>
                <div className="gapButton">
                  <button
                    className="newButton"
                    onClick={() => {
                      const delTodo = todo.filter((todo) => {
                        return todo.id !== item.id;
                      });

                      setTodo(delTodo);
                    }}
                  >
                    삭제하기
                  </button>
                  <button className="newButton">완료</button>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <h2>완료 목록!!</h2>
        <div className="app-style">
          {todo
            .filter((todo) => todo.isDone === true)
            .map(function (item) {
              return (
                <div key={item.id} className="component-style">
                  <h2>
                    {item.title}
                    {item.id}
                  </h2>
                  <p>{item.contents}</p>
                  <div className="gapButton">
                    <button
                      className="newButton"
                      onClick={() => {
                        const delTodo = todo.filter((todo) => {
                          return todo.id !== item.id;
                        });

                        setTodo(delTodo);
                      }}
                    >
                      삭제하기
                    </button>
                    <button className="newButton">취소</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
