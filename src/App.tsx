import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";

import styles from "./styles/app.module.css";

function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <TodoList />
        <TodoInput />
      </div>
    </>
  );
}

export default App;
