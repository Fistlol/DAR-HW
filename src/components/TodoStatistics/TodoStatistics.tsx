import React, { useContext } from "react";
import TodoContext from "../../contexts/todo.context";

import styles from "./TodoStatistics.module.scss";

interface Props {}

const TodoStatistics = (props: Props) => {
  const { statistics } = useContext(TodoContext);

  return (
    <div className={styles.statistics_wrap}>
      <h3>Statistics</h3>
      <div>Total: {statistics.total}</div>
      <div>Done: {statistics.doneCount}</div>
      <div>Changes: {statistics.changes}</div>
    </div>
  );
};

export default TodoStatistics;
