import React from 'react';
import classnames from 'classnames/bind';
import styles from './TodoList.scss';

const cx = classnames.bind(styles);

const TodoList = ({ todos }) => {
  const todoList = todos.map(todo => (
    <div className={cx('item')} key={todo.id}>
      {todo.content}
    </div>
  ));

  return <div className={cx('TodoList')}>{todoList}</div>;
};

export default TodoList;
