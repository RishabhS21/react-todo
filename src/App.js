import './App.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import { AddTodoItem } from './components/AddTodoItem';

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log('TODO am on delete.', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc, req) => {
    console.log("I am adding a todo.", title, desc);
    let sno = (todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1);
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      req: req
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header todos={todos} title="ToDosList"></Header>
      <AddTodoItem todos={todos} addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer />
    </>


  );
}

export default App;
