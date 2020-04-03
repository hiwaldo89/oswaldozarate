import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import ProjectCard from "../components/project-card"

const PortfolioTemplate = ({ data: { allPrismicProject } }) => {
  const { edges: projects } = allPrismicProject
  console.log(projects)
  return (
    <Layout>
      <div className="container">
        <div
          className="recent-projects"
          css={css`
            margin-left: -15px;
            margin-right: -15px;
            display: flex;
            flex-wrap: wrap;
            padding-top: 3rem;
          `}
        >
          {projects.map(project => {
            const formattedProject = {
              uid: project.node.uid,
              cover: project.node.data.cover_image,
              title: project.node.data.title.text,
            }
            return (
              <ProjectCard key={project.node.id} project={formattedProject} />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioTemplate

export const portfolioQuery = graphql`
  query portfolioQuery($skip: Int!, $limit: Int!) {
    allPrismicProject(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          uid
          data {
            cover_image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`
