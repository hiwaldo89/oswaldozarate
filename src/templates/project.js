import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/pro-regular-svg-icons"
import {
  faWordpress,
  faShopify,
  faVuejs,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

const ProjectTemplate = ({ data: { prismicProject } }) => {
  const { data } = prismicProject
  console.log(data)
  return (
    <Layout>
      <div
        className="container"
        css={css`
          padding-top: 3.5rem;
          padding-bottom: 2rem;
          .row {
            margin-left: -15px;
            margin-right: -15px;
            display: flex;
            flex-wrap: wrap;
          }
          .project-description,
          .project-meta {
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
          }
          .project-description {
            .gatsby-image-wrapper {
              margin-bottom: 1.5rem;
            }
            @media (min-width: 768px) {
              width: 70%;
              flex: 0 0 70%;
              max-width: 70%;
            }
          }
          .project-meta {
            @media (min-width: 768px) {
              margin-left: auto;
              width: 25%;
              flex: 0 0 25%;
              max-width: 25%;
            }
            ul {
              list-style: none;
              padding: 0;
              li {
                position: relative;
                padding-left: 35px;
                margin-bottom: 1rem;
                svg {
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  margin: auto;
                }
              }
            }
          }
        `}
      >
        <div className="row">
          <div className="project-description">
            <h2>
              {data.title.text}{" "}
              {data.project_link.url !== "" && (
                <a
                  href={data.project_link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} className="fa-xs" />
                </a>
              )}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: data.description.html }} />
            {data.gallery.map((galleryItem, index) => (
              <Image key={`gallery-${index}`} fluid={galleryItem.image.fluid} />
            ))}
          </div>
          <div className="project-meta">
            <h3>Technologies</h3>
            <ul>
              {data.technologies.map(({ technology }) => (
                <li key={technology.document.id}>
                  {technology.slug === "wordpress" && (
                    <FontAwesomeIcon icon={faWordpress} />
                  )}
                  {technology.slug === "shopify" && (
                    <FontAwesomeIcon icon={faShopify} />
                  )}
                  {technology.slug === "vue-js" && (
                    <FontAwesomeIcon icon={faVuejs} />
                  )}
                  {technology.slug === "react" && (
                    <FontAwesomeIcon icon={faReact} />
                  )}
                  {technology.document.data.title.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectById($id: String!) {
    prismicProject(id: { eq: $id }) {
      uid
      data {
        title {
          text
        }
        project_link {
          url
        }
        description {
          html
        }
        gallery {
          image {
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
        }
        technologies {
          technology {
            document {
              ... on PrismicProjectCategory {
                id
                data {
                  title {
                    text
                  }
                }
              }
            }
            slug
          }
        }
      }
    }
  }
`
