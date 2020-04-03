const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectsResult = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            uid
            id
          }
        }
      }
    }
  `)
  const projects = projectsResult.data.allPrismicProject.edges
  const projectsPerPage = 6
  const numPages = Math.ceil(projects.length / projectsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
      component: path.resolve(__dirname, "src/templates/portfolio.js"),
      context: {
        limit: projectsPerPage,
        skip: i * projectsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  projects.forEach(project => {
    createPage({
      path: `/portfolio/${project.node.uid}`,
      component: path.resolve(__dirname, "src/templates/project.js"),
      context: {
        id: project.node.id,
      },
    })
  })
}
