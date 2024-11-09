import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: 'Azure COSI Driver',
    repoURL: 'https://github.com/Azure/azure-cosi-driver',
    description: (
      <>
        Official COSI driver for Azure Blob Store.
      </>
    ),
  },
  {
    title: 'Ceph COSI Driver',
    repoURL: 'https://github.com/ceph/ceph-cosi',
    description: (
      <>
        Official COSI driver for Ceph Rados Gateway (RGW).
      </>
    ),
  },
  {
    title: 'Dell COSI Driver',
    repoURL: 'https://github.com/dell/cosi',
    description: (
      <>
        Official COSI driver for Dell ObjectScale.
      </>
    ),
  },
  {
    title: 'SUSE COSI Driver',
    repoURL: 'https://github.com/aquarist-labs/s3gw-cosi-driver',
    description: (
      <>
        Official COSI driver for SUSE s3gw.
      </>
    ),
  },
  {
    title: 'Huawei COSI Driver',
    repoURL: 'https://github.com/Huawei/cosi',
    description: (
      <>
        Official COSI driver for Huawei Object Storage.
      </>
    ),
  },
];

function Feature({ repoURL, title, description }) {
  /*const imgUrl = useBaseUrl(imageUrl);*/
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {/* {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )} */}
      <div className="text--center">
        <Link to={repoURL}><h3>{title}</h3> </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

function User({ name, imageUrl, organizationURL, organizationName, organizationLogo, github, twitter, pinned }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="leaderboard" key={name} style={{ "margin": "auto", "alignItems": "center", "justifyContents": "center", "display": "flex", "flexDirection": "row" }}>

      <a href={imageUrl} key={name}>
        <img src={imageUrl} alt={name} title={name} style={{ "height": "100px", "width": "100px", "marginRight": "1px", "marginBottom": "0px", "padding": "50px" }} />
      </a>

      <div className="leaderboard-details" style={{ "textAlign": "left" }}>

        <strong>{name}</strong><br />

        <div style={{ "display": "flex", "flexDirection": "row", "alignItems": "center", "fontWeight": "700", "fontColor": "black" }}>
          <img src={organizationLogo} alt='org' style={{ "height": "24px", "width": "24px", "marginRight": "5px", "marginBottom": "5px", "padding": "0" }} />
          <a className="github" href={organizationURL} style={{ "color": "black" }}>{organizationName}</a>
        </div>

        <div style={{ "display": "flex", "flexDirection": "row", "alignItems": "center", "fontWeight": "700", "fontColor": "black" }}>
          <img src='/img/github.svg' alt='github' style={{ "height": "24px", "width": "24px", "marginRight": "5px", "marginBottom": "5px", "padding": "0" }} />
          <a className="github" href={"https://github.com/" + github} style={{ "color": "black" }}>{github}</a>
        </div>

        <div style={{ "display": "flex", "flexDirection": "row", "alignItems": "center", "fontWeight": "700", "fontColor": "black" }}>
          <img src='/img/twitter.png' alt='twitter' style={{ "height": "20px", "width": "24px", "marginRight": "5px", "marginBottom": "5px", "padding": "0" }} />
          <a className="twitter" href={"https://twitter.com/" + twitter} style={{ "color": "black" }}>{twitter}</a>
        </div>

      </div>

    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to="docs/deployment-guide">
              TRY IT OUT
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
