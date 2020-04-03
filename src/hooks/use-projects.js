import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicProject {
        edges {
          node {
            id
            uid
            data {
              title {
                text
              }
              cover_image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allPrismicProject.edges.map(project => ({
    uid: project.node.uid,
    id: project.node.id,
    title: project.node.data.title.text,
    cover: project.node.data.cover_image,
  }))
}

export default useProjects
