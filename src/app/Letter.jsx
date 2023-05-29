import * as React from 'react';

import styles from './Letter.module.css';

export default function Letter({
  fontA,
  fontB,
  value,
}) {
  return (
    <div className={styles.wrapper}>
      {fontA && (
        <span
          className={styles.font}
          style={{
            color: '#00B7FF',
            fontFamily: fontA,
          }}
        >
          {value}
        </span>
      )}
      {fontB && (
        <span
          className={styles.font}
          style={{
            color: '#C75646',
            fontFamily: fontB,
          }}
        >
          {value}
        </span>
      )}
    </div>
  );
}