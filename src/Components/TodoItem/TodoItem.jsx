import styles from "./TodoItem.module.css";
function TodoItem({ id, title, deleteTodo }) {
  return (
    <div className={styles.todoItem}>
      <p>{title}</p>
      <button onClick={() => deleteTodo(id)}>x</button>
    </div>
  );
}
export default TodoItem;
