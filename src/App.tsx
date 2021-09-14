import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoStatistics from "./components/TodoStatistics/TodoStatistics";
import { TodoProvider } from "./contexts/todo.context";
import Modal from "./components/Modal/Modal";

import styles from "./App.module.scss";

function App() {

  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <div className={styles.App}>
      <h1>To Do List</h1>
      <TodoProvider>
        <div className={styles.wrap}>
          
          <TodoList />

          <Modal active={modalActive} closeEvent={setModalActive}>
            <TodoStatistics />
          </Modal>
            
          <button className={styles.btn} onClick={()=>{setModalActive(!modalActive)}}>
            Show Statistics
          </button>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
