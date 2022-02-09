import * as React from 'react';
import styles from './ui-button.module.scss';

export interface UiButtonProps {
  children?: React.ReactNode;
}

export function UiButton(props: UiButtonProps) {
  return <button className={styles['button']}>{props.children}</button>;
}

export default UiButton;
