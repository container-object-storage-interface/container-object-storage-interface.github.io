module.exports = {
  docs: [

    {
      type: 'category',
      label: 'Kubernetes COSI',
      items: [
        'introduction',
        'kube_release_support',
        'contributing',
        'cosi/architecture',
        'cosi/protocols',
        'cosi/internals',
      ],
    },

    {
      label: 'Getting Started',
      type: 'category',
      items: [
        'deployment-guide',
        'user-guide',
      ],
    },

    {
      label: 'Authoring COSI Driver',
      type: 'category',
      items: [
        'write-driver/introduction',
        'write-driver/cosi-controller',
        'write-driver/cosi-sidecar',

      ],
    },

    // {
    //   label: 'Misc',
    //   type: 'category',
    //   items: [
    //     'markdown-features',
    //   ],
    // },

  ],

  community: [
    'community/team',
    'community/support',
    'community/weekly-meetings',
    'community/code-of-conduct'
  ],


};
