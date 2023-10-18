import styles from './ui.module.css';
import { utils } from '@mf2/utils';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return <div className={styles['container']}>{utils()}</div>;
}

export default Ui;
