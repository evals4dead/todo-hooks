import React, { Component } from 'react';
import classnames from 'classnames/bind';
import TodoTitle from './components/TodoTitle';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import styles from './App.scss';

const cx = classnames.bind(styles);

class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        content: 'Todo!'
      },
      {
        id: 1,
        content: 'No Todo!'
      },
      {
        id: 2,
        content: 'Yes Todo!'
      }
    ]
  };

  addTodos = ({ todo }) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.concat({
        id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
        content: todo
      })
    });
  };

  render() {
    const { todos } = this.state;
    const { addTodos } = this;
    return (
      <div className={cx('wrapper')}>
        <div className={cx('inner')}>
          <TodoTitle />
          <TodoInput addTodos={addTodos} />
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
