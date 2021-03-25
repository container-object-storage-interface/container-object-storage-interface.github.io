/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Sidhartha Mani',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
      image: '/img/sidhartha_mani.jpg',
      infoLink: 'https://github.com/wlan0',
      organizationURL: 'https://min.io',
      organizationName: 'MinIO Inc.',
      organizationLogo: '/img/minio.svg',
      github: 'wlan0',
      twitter: 'utter_babbage',
    pinned: true,
  },
  {
    caption: 'Jeff Vance',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/jeff_vance.jpeg',
    infoLink: 'https://github.com/jeffvance',
    organizationURL: 'https://redhat.com',
    organizationName: 'Redhat Inc.',
    organizationLogo: '/img/redhat.png',
    github: 'jeffvance',
    twitter: 'jeffvance',
    pinned: true,
  },
  {
    caption: 'Srini Brahmaroutu',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/srini_brahmaroutu.jpeg',
    infoLink: 'https://github.com/brahmaroutu',
    organizationURL: 'https://www.ibm.com',
    organizationName: 'IBM Inc.',
    organizationLogo: '/img/ibm.png',
    github: 'brahmaroutu',
    twitter: 'brahmaroutu',
    pinned: true,
  },
  {
    caption: 'Krish Chowdhary',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/krish_chowdhary.jpeg',
    infoLink: 'https://github.com/krishchow',
    organizationURL: 'https://redhat.com',
    organizationName: 'Redhat Inc.',
    organizationLogo: '/img/redhat.png',
    github: 'krishchow',
    twitter: 'krishchow_',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Kubernetes COSI', // Title for your website.
  tagline: 'Container Object Storage Interface',
  url: 'https://container-object-storage-interface.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'container-object-storage-interface.github.io',
  organizationName: 'container-object-storage-interface',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
  //   {doc: 'doc1', label: 'Docs'},
  //   {doc: 'doc4', label: 'API'},
  //   {page: 'help', label: 'Help'},
  //  {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  //headerIcon: 'img/favicon.ico',
  //footerIcon: 'img/favicon.ico',
  //favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#2e8555',
    secondaryColor: '#205c3b',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Calibri",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  //copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
    
  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
