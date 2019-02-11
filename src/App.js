import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import TodoTitle from './components/TodoTitle';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import styles from './App.scss';

const cx = classnames.bind(styles);

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      content: 'Todo!',
      checked: false
    },
    {
      id: 1,
      content: 'No Todo!',
      checked: true
    },
    {
      id: 2,
      content: 'Yes Todo!',
      checked: false
    }
  ]);

  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    if (!loaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    if (loaded) {
      if (!localStorage.getItem('todos')) {
        localStorage.setItem('todos', JSON.stringify(todos));
      } else {
        setTodos(JSON.parse(localStorage.getItem('todos')));
      }
      setLoaded(false);
    }
  }, [loaded]);

  const addTodos = ({ todo }) => {
    setTodos(
      todos.concat({
        id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
        content: todo,
        checked: false
      })
    );
  };

  const setChecked = item => {
    const newTodos = todos.map(todo => {
      if (todo.id === item.id) {
        return {
          ...todo,
          checked: !todo.checked
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = item => {
    const newTodo = todos.filter(todo => todo.id !== item.id);
    setTodos(newTodo);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <TodoTitle />
        <TodoInput addTodos={addTodos} />
        <TodoList
          todos={todos}
          setChecked={setChecked}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};

export default App;
