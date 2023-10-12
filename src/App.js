// import logo from "./platzi.webp";
// import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";


const defaultTodos = [
  { "id": 0, "text": "Cortar cebolla", "completed": false },
  { "id": 1, "text": "Tomar el curso de React", "completed": true },
  { "id": 2, "text": "Llorar", "completed": false }
]
function App() {
  // Estados
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  // Computed props // estados derivados
const completedTodos = todos.filter(el => el.completed).length;
const totalTodos = todos.length;
const searchedTodos = todos.filter(el => el.text.toLowerCase().includes(searchValue.toLowerCase()))
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList >

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
