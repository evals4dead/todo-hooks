import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './TodoInput.scss';

const cx = classnames.bind(styles);

const TodoInput = ({ addTodos }) => {
  const [todo, setTodo] = useState('');

  const onKeyPress = e => {
    const { key } = e;
    if (key === 'Enter') {
      setTodo('');
      addTodos({
        todo
      });
    }
  };

  return (
    <div className={cx('TodoInput')}>
      <input
        type="text"
        placeholder="Type Your Todo Things"
        value={todo}
        onChange={e => {
          const { value } = e.target;
          setTodo(value);
        }}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default TodoInput;
