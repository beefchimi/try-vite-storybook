import {clx} from 'beeftools';

import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';

import styles from './Brand.module.css';

export function Brand() {
  return (
    <div className={styles.Brand}>
      <a
        href="https://vitejs.dev"
        className={styles.Link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={viteLogo} className={styles.Logo} alt="Vite logo" />
      </a>

      <a
        href="https://react.dev"
        className={styles.Link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={reactLogo}
          className={clx(styles.Logo, styles.react)}
          alt="React logo"
        />
      </a>
    </div>
  );
}
