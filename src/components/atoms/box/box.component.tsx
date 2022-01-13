import React from 'react';
import cn from 'classnames';
import { Element } from '../../core/element';
import styles from './box.module.css';

export const Box: React.FC = ({ children }) => {
  return (
    <Element renderAs="div" className={cn(styles.box)}>
      {children}
    </Element>
  );
};

Box.displayName = 'Box';

Box.propTypes = {};

Box.defaultProps = {};
