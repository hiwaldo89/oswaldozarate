import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectCard = ({ project }) => {
  return (
    <div
      css={css`
        width: 100%;
        padding: 0 15px;
        margin-bottom: 1.5rem;
        @media (min-width: 768px) {
          width: 33.3333333%;
          flex: 0 0 33.3333333%;
          max-width: 33.3333333%;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        h2 {
          font-size: 1.3rem;
        }
      `}
    >
      <Link to={`/portfolio/${project.uid}`}>
        <Image fluid={project.cover.fluid} />
        <h2>{project.title}</h2>
      </Link>
    </div>
  )
}

export default ProjectCard
