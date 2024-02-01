import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import styled from "styled-components";

function App() {
  //값을 변경하고 재렌더링을 위한 State 선언
  const [todo, setTodo] = useState([
    // {
    //   id: uuid(),
    //   title: "리액트 공부하기",
    //   contents: "리액트 기초를 공부해봅시다.",
    //   deadline: "2024-03-15",
    //   isDone: false,
    // },
    // {
    //   id: uuid(),
    //   title: "리액트를 공부합시다.",
    //   contents: "리액트 노션 보기!!!",
    //   deadline: "2024-03-15",
    //   isDone: true,
    // },
  ]);

  const [sortOrder, setSortOder] = useState("asc");

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

  const onChangeSortOrder = (event) => {
    const nextSortOrder = event.target.value;

    setSortOder(nextSortOrder);

    if (nextSortOrder === "asc") {
      setTodo((todo) =>
        [...todo].sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
      );
      return;
    }
    setTodo((todo) =>
      [...todo].sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
    );
  };

  const StLayout = styled.div`
    border: solid #5a5230;
    border-radius: 10px;
  `;

  const StDivHader = styled.div`
    height: 40px;
    display: flex;
    margin-left: 10px;
  `;

  const StH2Hader = styled.h2`
    height: 40px;
    display: flex;
    margin-left: 10px;
  `;

  const StSubject = styled.p`
    margin-right: 10px;
    margin-left: auto;
  `;
  const StInputArea = styled.div`
    display: flex;
    padding: 10px auto 0 auto;
    gap: 15px;
    height: 130px;
    background-color: #d4b7a5cf;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  `;
  const StInput = styled.input`
    border-radius: 3px;
    height: 30px;
    width: 200px;
  `;

  const StTitle = styled.h3`
    color: #5a5230;
  `;

  const StButton = styled.button`
    background-color: #877c49;
    color: #fff;
    border: none;
    border-radius: 20px;
    height: 31px;
    width: 68px;
    display: flex;
  `;

  const StNewButton = styled.button`
    background-color: #877c49;
    color: #fff;
    border: none;
    border-radius: 30px;
    height: 30px;
    width: 70px;
  `;
  const StTodoCard = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
  `;
  const StTodos = styled.div`
    width: 350px;
    height: 250px;
    border: 3px solid rgba(217, 179, 109, 0.93);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
  `;
  const StGapButton = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <StLayout>
      <StDivHader>
        <header>My Todo List</header>
        <StSubject>React</StSubject>
      </StDivHader>

      <StInputArea>
        <StTitle>제목&nbsp;</StTitle>
        <StInput value={title} onChange={titleChangeHandler} />
        {/* 잘 들어오는지 테스트 */}
        {/* {title} */}
        <StTitle>내용&nbsp;</StTitle>
        <StInput value={contents} onChange={contentsChangeHandler} />
        {/* 잘 들어오는지 테스트 */}
        {/* {contents} */}
        <StTitle>마감날짜 :&nbsp;</StTitle>
        <div>
          <input
            type="date"
            value={deadline}
            onChange={deadlinesChangeHandler}
          />
          <select onChange={onChangeSortOrder} value={sortOrder}>
            <option value="asc" selected>
              오름차순
            </option>
            <option value="desc">내림차순</option>
          </select>
        </div>
        <StButton onClick={clickAddButtonHandler}>
          <p>추가하기</p>
        </StButton>
      </StInputArea>
      <StLayout>
        <StH2Hader>할 일 목록!</StH2Hader>
      </StLayout>
      <StTodoCard>
        {todo
          .filter((todo) => todo.isDone === false)
          .map(function (item) {
            return (
              <StTodos key={item.id}>
                <div className="TodoTitle">
                  <h2>{item.title}</h2>
                </div>
                <div className="TodoContent">
                  <p>{item.contents}</p>
                </div>
                <time>
                  {new Date(item.deadline).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <StGapButton>
                  <StNewButton
                    onClick={() => {
                      const delTodo = todo.filter((todo) => {
                        return todo.id !== item.id;
                      });

                      setTodo(delTodo);
                    }}
                  >
                    삭제하기
                  </StNewButton>
                  <StNewButton onClick={() => completeBtn(item.id)}>
                    완료
                  </StNewButton>
                </StGapButton>
              </StTodos>
            );
          })}
      </StTodoCard>
      <div>
        <StLayout>
          <StH2Hader>완료 목록!!</StH2Hader>
        </StLayout>
        <StTodoCard>
          {todo
            .filter((todo) => todo.isDone === true)
            .map(function (item) {
              return (
                <StTodos key={item.id}>
                  <div className="TodoTitle">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="TodoContent">
                    <p>{item.contents}</p>
                  </div>
                  <time>
                    {new Date(item.deadline).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <StGapButton>
                    <StNewButton
                      onClick={() => {
                        const delTodo = todo.filter((todo) => {
                          return todo.id !== item.id;
                        });

                        setTodo(delTodo);
                      }}
                    >
                      삭제하기
                    </StNewButton>
                    <StNewButton onClick={() => completeBtn(item.id)}>
                      취소
                    </StNewButton>
                  </StGapButton>
                </StTodos>
              );
            })}
        </StTodoCard>
      </div>
    </StLayout>
  );
}

export default App;
