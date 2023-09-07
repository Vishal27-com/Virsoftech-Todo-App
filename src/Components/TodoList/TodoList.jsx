import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.map((tit, ind) => (
        <TodoItem key={ind} id={ind} title={tit} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
export default TodoList;
