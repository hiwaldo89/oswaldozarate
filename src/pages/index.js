import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/project-card"
import useProjects from "../hooks/use-projects"

const HomePage = () => {
  const recentProjects = useProjects()

  console.log(recentProjects[0])
  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="container"
        css={css`
          p {
            padding: 4.5rem 0 2rem 0;
            margin: 0;
            width: 100%;
            text-align: justify;
            @media (min-width: 992px) {
              width: 50%;
            }
          }
          .recent-projects {
            display: flex;
            flex-wrap: wrap;
            margin-left: -15px;
            margin-right: -15px;
          }
        `}
      >
        <p>
          I'm a Software developer located in Querétaro, México. I have a degree
          in Marketing and Communications but found my passion on web
          development. I'm mostly a self taught developer and I love to
          continually learn new things.
        </p>
        <div className="recent-projects">
          {recentProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
