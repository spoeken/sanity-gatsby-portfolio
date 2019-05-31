export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5cf0e56cdd34a50afd2a19ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-39zecun7',
                  apiId: '016583dd-c834-4927-a224-ba24556aeb15'
                },
                {
                  buildHookId: '5cf0e56c4ab9d0f1bcc80781',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-j8ztdru9',
                  apiId: '82e0583c-8ed8-4d7b-b685-7cf99cde44bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spoeken/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-j8ztdru9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
