import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AnimatedEdgesFlow from '@site/src/components/AnimatedEdgesFlow';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="">
      <header className={styles.heroBanner}>
        <img
          src="/doc-acq/img/banner_newpay.png"
          alt="Newpay Banner"
          className={styles.bannerImage}
        />
      </header>
      <main className={styles.textSection}>
        <p className={styles.subtitle}>
          La puerta de entrada a tu integración técnica
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/doc-acq/onboarding">
            Start Learning 🚀
          </Link>
        </div>

        {/* 🎯 Agregamos el componente con algo de estilo */}
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
          <AnimatedEdgesFlow />
        </div>
      </main>
    </Layout>
  );
}
