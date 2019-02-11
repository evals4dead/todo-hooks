import React from 'react';
import classnames from 'classnames/bind';
import styles from './TodoList.scss';
import TodoItem from './TodoItem';

const cx = classnames.bind(styles);

const TodoList = ({ todos, setChecked, removeTodo }) => {
  const todoList = todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      setChecked={setChecked}
      removeTodo={removeTodo}
    />
  ));

  return <div className={cx('TodoList')}>{todoList}</div>;
};

export default TodoList;
