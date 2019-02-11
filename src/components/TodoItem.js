import React from 'react';
import classnames from 'classnames/bind';
import styles from './TodoItem.scss';

const cx = classnames.bind(styles);

const TodoItem = ({ todo, setChecked, removeTodo }) => {
  return (
    <div
      className={cx('item')}
      onClick={() => {
        setChecked(todo);
      }}
    >
      <div className={cx('todo', todo.checked && 'checked')}>
        {todo.content}
      </div>
      <div
        className={cx('right')}
        onClick={e => {
          e.stopPropagation();
          removeTodo(todo);
        }}
      >
        &#10062;
      </div>
    </div>
  );
};

export default TodoItem;
