import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: 'Object Storage Vendors',
    imageUrl: 'img/vendors.svg',
    description: (
      <>
Vendors can write their own COSI drivers to enable applications to use their object storage system. Learn how to write a COSI driver <a href="https://github.com/kubernetes-sigs/container-object-storage-interface-api/blob/master/docs/how-to-write-a-cosi-driver.md">here</a>.
      </>
    ),
  },
  {
    title: 'Application Developers',
    imageUrl: 'img/app_developers.svg',
    description: (
      <>
Make your application COSI compatible and seamlessly switch between object storage providers without any application code changes. Learn more <a href="https://github.com/kubernetes-sigs/container-object-storage-interface-api/blob/master/docs/how-to-make-your-application-cosi-compatible.md">here</a>.
      </>
    ),
  },
];


const users = [
  {
    name: 'Sidhartha Mani',
    imageUrl: '/img/sidhartha_mani.jpg',
    organizationURL: 'https://min.io',
    organizationName: 'MinIO, Inc.',
    organizationLogo: '/img/minio.svg',
    github: 'wlan0',
    twitter: 'utter_babbage',
    pinned: true,
  },
  {
    name: 'Jeff Vance',
    imageUrl: '/img/jeff_vance.jpeg',
    organizationURL: 'https://redhat.com',
    organizationName: 'Red Hat, Inc.',
    organizationLogo: '/img/redhat.png',
    github: 'jeffvance',
    twitter: 'jeffvance',
    pinned: true,
  },
  // {
  //   name: 'Krish Chowdhary',
  //   imageUrl: '/img/krish.jpeg',
  //   organizationURL: 'https://redhat.com',
  //   organizationName: 'Red Hat, Inc.',
  //   organizationLogo: '/img/redhat.png',
  //   github: 'krishchow',
  //   twitter: 'krishchow_',
  //   pinned: true,
  // },
//   {
//     name: 'Rob Rati',
//     imageUrl: '/img/avatar.png',
//     organizationURL: 'https://redhat.com',
//     organizationName: 'Red Hat, Inc.',
//     organizationLogo: '/img/redhat.png',
//     github: 'rrati',
//     twitter: '',
//     pinned: true,
//   },
//   {
//     name: 'Srini Brahmaroutu',
//     imageUrl: '/img/avatar.png',
//     organizationURL: 'https://ibm.com',
//     organizationName: 'IBM',
//     organizationLogo: '/img/ibm.svg',
//     github: 'brahmaroutu',
//     twitter: 'brahmaroutu',
//     pinned: true,
//   },
//   {
//     name: 'Tejas Parikh',
//     imageUrl: '/img/tejas_parikh.jpg',
//     organizationURL: '',
//     organizationName: '',
//     organizationLogo: '/img/1.png',
//     github: 'tparikh',
//     twitter: 'tejasparikh',
//     pinned: true,
//   },
];

// const users_2 = [
//   {
//     name: 'Sidhartha Mani',
//     imageUrl: '/img/sidhartha_mani.jpg',
//     organizationURL: 'https://min.io',
//     organizationName: 'MinIO, Inc.',
//     organizationLogo: '/img/minio.svg',
//     github: 'wlan0',
//     twitter: 'utter_babbage',
//     pinned: true,
//   },
//   {
//     name: 'Jeff Vance',
//     imageUrl: '/img/jeff_vance.jpeg',
//     organizationURL: 'https://redhat.com',
//     organizationName: 'Red Hat, Inc.',
//     organizationLogo: '/img/redhat.png',
//     github: 'jeffvance',
//     twitter: 'jeffvance',
//     pinned: true,
//   },
//   {
//     name: 'Krish Chowdhary',
//     imageUrl: '/img/krish.jpeg',
//     organizationURL: 'https://redhat.com',
//     organizationName: 'Red Hat, Inc.',
//     organizationLogo: '/img/redhat.png',
//     github: 'krishchow',
//     twitter: 'krishchow_',
//     pinned: true,
//   },
//   {
//     name: 'Rob Rati',
//     imageUrl: '/img/avatar.png',
//     organizationURL: 'https://redhat.com',
//     organizationName: 'Red Hat, Inc.',
//     organizationLogo: '/img/redhat.png',
//     github: 'rrati',
//     twitter: '',
//     pinned: true,
//   },
//   {
//     name: 'Srini Brahmaroutu',
//     imageUrl: '/img/avatar.png',
//     organizationURL: 'https://ibm.com',
//     organizationName: 'IBM',
//     organizationLogo: '/img/ibm.svg',
//     github: 'brahmaroutu',
//     twitter: 'brahmaroutu',
//     pinned: true,
//   },
//   {
//     name: 'Tejas Parikh',
//     imageUrl: '/img/jeff_vance.jpeg',
//     organizationURL: 'https://redhat.com',
//     organizationName: 'Red Hat, Inc.',
//     organizationLogo: '/img/redhat.png',
//     github: 'tparikh',
//     twitter: 'tejasparikh',
//     pinned: true,
//   },
// ];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function User({name, imageUrl, organizationURL, organizationName, organizationLogo , github, twitter, pinned}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="leaderboard" key={name} style={{"margin": "auto", "alignItems": "center", "justifyContents": "center", "display": "flex", "flexDirection": "row"}}>

      <a href={imageUrl} key={name}>
        <img src={imageUrl} alt={name} title={name} style={{"height": "100px", "width": "100px", "marginRight": "1px", "marginBottom": "0px", "padding": "50px"}}/>
      </a>

      <div className="leaderboard-details" style={{"textAlign": "left"}}>

        <strong>{name}</strong><br />

        <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "fontWeight": "700", "fontColor": "black"}}>
          <img src={organizationLogo} alt='org' style={{"height": "24px", "width": "24px", "marginRight": "5px", "marginBottom": "5px", "padding": "0"}} />
          <a className="github" href={organizationURL} style={{"color": "black"}}>{organizationName}</a>
        </div>

        <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "fontWeight": "700", "fontColor": "black"}}>
          <img src='/img/github.svg' alt='github' style={{"height": "24px", "width": "24px", "marginRight": "5px", "marginBottom": "5px", "padding": "0"}} />
          <a className="github" href={"https://github.com/" + github} style={{"color": "black"}}>{github}</a>
        </div>

        <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "fontWeight": "700", "fontColor": "black"}}>
          <img src='/img/twitter.png' alt='twitter' style={{"height": "20px", "width": "24px", "marginRight": "5px", "marginBottom": "5px", "padding": "0"}} />
          <a className="twitter" href={"https://twitter.com/" + twitter} style={{"color": "black"}}>{twitter}</a>
        </div>

      </div>

    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
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
              to="https://github.com/kubernetes-sigs/container-object-storage-interface-api/blob/master/docs/deployment-guide.md">
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


        {users && users.length > 0 && (
        <section className={styles.users}>
          <div className="container">
            <div className="col">
              <h2 className="text--center">Who is Behind This?</h2>
              <h3 className="text--center">SIG Storage COSI is led by these members</h3>
            </div>
            <div className="row">
              {users.map((props, idx) => (
                <User key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        )}

      </main>
    </Layout>
  );
}
