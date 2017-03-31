import React from 'react';
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import TodoInput from "../components/TodoInput";
import Chat from "../components/Chat";

const Todo = (props) => {
    return (
      <div>
        <TodoInput onAddTodo={props.onAddTodo} />
        <TodoList todos={props.todos} filter={props.filter} selectItem={props.onTodoClick} />
        <TodoFilter status={props.filter} onSelectFilter={props.filterTodo} />

        <Chat />
      </div>
    );
}
export default Todo;
