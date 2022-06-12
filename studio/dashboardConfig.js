export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a5c9d260f871515d00701c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cwanbf82',
                  apiId: '2e92a323-4288-4b25-bb74-24bf2b848d94'
                },
                {
                  buildHookId: '62a5c9d211291e4f55755899',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ykbd5a18',
                  apiId: '4e3183b1-7702-4be2-a8a0-1a547a1aaab3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ozanyeni/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ykbd5a18.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
