import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";

function App() {
  //값을 변경하고 재렌더링을 위한 State 선언
  const [todo, setTodo] = useState([
    {
      id: uuid(),
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      deadline: "2024-03-15",
      isDone: false,
    },
    {
      id: uuid(),
      title: "리액트를 공부합시다.",
      contents: "리액트 노션 보기!!!",
      deadline: "2024-03-15",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");

  const [contents, setContents] = useState("");

  const [deadline, setDeadline] = useState("");

  //제목 입력값을 기록하기 위한 핸들러
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  //내용 입력값을 기록하기 위한 핸들러
  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  };
  //마감일 입력값을 기록하기 위한 핸들러
  const deadlinesChangeHandler = (event) => {
    setDeadline(event.target.value);
  };

  //추가 버튼 클릭시 기록한 제목,내용 입력값을 렌더링하기 위한 핸들러
  //todo를 풀어서 newTodo값을 넣어서 setTodo로(State) 렌더링
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: uuid(),
      title,
      contents,
      deadline,
      isDone: false,
    };

    setTodo([...todo, newTodo]);
  };
  //완료,취소 클릭시 변경되는 버튼 핸들러
  //매개변수 없을때 전체가 바껴서 매개변수로 id주기.
  const completeBtn = function (id) {
    const completeTodo = todo.filter(function (item) {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setTodo(completeTodo);
  };

  return (
    <div className="up">
      <div className="hader">
        <header>My Todo List</header>
        <p className="subject">React</p>
      </div>

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
        <h3 className="title">마감날짜 :&nbsp;</h3>
        <input type="date" value={deadline} onChange={deadlinesChangeHandler} />
        <button className="Button" onClick={clickAddButtonHandler}>
          <p>추가하기</p>
        </button>
      </div>
      <div className="up">
        <h2 className="hader">할 일 목록!</h2>
      </div>
      <div className="todo-card">
        {todo
          .filter((todo) => todo.isDone === false)
          .map(function (item) {
            return (
              <div key={item.id} className="component-style">
                <div className="TodoTitle">
                  <h2>{item.title}</h2>
                </div>
                <div className="TodoContent">
                  <p>{item.contents}</p>
                </div>
                <div>{new Date(item.deadline).toLocaleDateString()}</div>
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
                  <button
                    className="newButton"
                    onClick={() => completeBtn(item.id)}
                  >
                    완료
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <div className="up">
          <h2 className="hader">완료 목록!!</h2>
        </div>
        <div className="todo-card">
          {todo
            .filter((todo) => todo.isDone === true)
            .map(function (item) {
              return (
                <div key={item.id} className="component-style">
                  <div className="TodoTitle">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="TodoContent">
                    <p>{item.contents}</p>
                  </div>
                  <div>{new Date(item.deadline).toLocaleDateString()}</div>
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
                    <button
                      className="newButton"
                      onClick={() => completeBtn(item.id)}
                    >
                      취소
                    </button>
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
