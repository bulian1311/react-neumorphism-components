import React from 'react';
import cn from 'classnames';
import styles from './background.module.css';

export interface BackgroundProps {
  backgroundcolor?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  children,
  ...props
}) => {
  return <div {...props} className={cn(styles.background)}>{children}</div>
};
