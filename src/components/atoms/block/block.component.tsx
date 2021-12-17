import React from 'react';
import cn from 'classnames';
import styles from './block.module.css';

export const Block: React.FC = ({ children }) => {
  return <div className={cn(styles.block)}>{children}</div>;
};
