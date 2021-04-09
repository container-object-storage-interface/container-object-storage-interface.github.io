/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kubernetes COSI',
  tagline: 'Kubernetes Container Object Storage Interface (COSI) is a standard for exposing object storage to containerized workloads running in Kubernetes',
  url: 'https://container-object-storage-interface.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'container-object-storage-interface', // Usually your GitHub org/user name.
  projectName: 'container-object-storage-interface.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Kubernetes COSI',
      logo: {
        alt: 'Kubernetes COSI',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'community/team',
          label: 'Community',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/cosi',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'http://example.com',
            // },
          ],
        },
        {
          title: 'GitHub Repositories',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kubernetes-sigs?q=container-object-storage-interface&type=&language=&sort=',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}  The Kubernetes Authors `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/container-object-storage-interface/container-object-storage-interface.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/container-object-storage-interface/container-object-storage-interface.github.io/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
