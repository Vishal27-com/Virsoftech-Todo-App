import styles from "./TodoInput.module.css";
function TodoInput({ changeHandler, submitHandler }) {
  return (
    <form onSubmit={submitHandler} className={styles.todoForm}>
      <input type="text" placeholder="Title" onChange={changeHandler} />
      <input type="submit" value="+" />
    </form>
  );
}
export default TodoInput;
