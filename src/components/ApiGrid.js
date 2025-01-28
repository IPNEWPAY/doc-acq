// src/components/ApiGrid.js
import React from 'react';
import Link from '@docusaurus/Link';
import apis from '@site/src/data/apis';
import styles from './ApiGrid.module.css';

const ApiGrid = () => (
  <div className={styles.grid}>
    {apis.map((api) => (
      <Link key={api.id} to={api.link} className={styles.card}>
        <h3>{api.name}</h3>
        <p>{api.description}</p>
      </Link>
    ))}
  </div>
);

export default ApiGrid;
