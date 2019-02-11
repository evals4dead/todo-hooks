import React from 'react';
import classnames from 'classnames/bind';
import styles from './TodoTitle.scss';

const cx = classnames.bind(styles);

const TodoTitle = () => {
  return <div className={cx('TodoTitle')}>Todo</div>;
};

export default TodoTitle;
