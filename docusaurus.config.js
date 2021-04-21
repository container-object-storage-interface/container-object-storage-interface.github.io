/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kubernetes COSI',
  tagline: 'Kubernetes Container Object Storage Interface (COSI) is a standard for exposing object storage to containerized workloads running in Kubernetes',
  url: 'https://container-object-storage-interface.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'container-object-storage-interface', // Usually your GitHub org/user name.
  projectName: 'container-object-storage-interface.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Kubernetes COSI',
      logo: {
        alt: 'Kubernetes COSI',
        src: 'img/logo-15.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          position: 'left',
          href: 'https://github.com/orgs/kubernetes-sigs/projects/8',
          label: 'Roadmap',
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
              label: 'container-object-storage-interface-api',
              href: 'https://github.com/kubernetes-sigs/container-object-storage-interface-api',
            },
            {
              label: 'container-object-storage-interface-spec',
              href: 'https://github.com/kubernetes-sigs/container-object-storage-interface-spec',
            },
            {
              label: 'container-object-storage-interface-controller',
              href: 'https://github.com/kubernetes-sigs/container-object-storage-interface-controller',
            },
            {
              label: 'container-object-storage-interface-provisioner-sidecar',
              href: 'https://github.com/kubernetes-sigs/container-object-storage-interface-provisioner-sidecar',
            },
            {
              label: 'container-object-storage-interface-csi-adapter',
              href: 'https://github.com/kubernetes-sigs/container-object-storage-interface-csi-adapter',
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
