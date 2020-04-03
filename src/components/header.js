import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Header = () => (
  <header
    css={css`
      .container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      nav {
        width: 100%;
        @media (min-width: 992px) {
          margin-left: auto;
          display: flex;
        }
        @media (min-width: 1140px) {
          width: 50%;
          justify-content: flex-end;
        }
      }
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        padding: 0;
      }
      li {
        margin: 0 1rem;
        margin-bottom: 1rem;
        @media (min-width: 992px) {
          margin-bottom: 0;
        }
      }
      a {
        color: inherit;
        text-decoration: none;
        font-size: 1.3rem;
      }
      .social-icon {
        a {
          padding: 0 0.8rem;
        }
        &:last-child {
          a {
            padding-right: 0;
          }
        }
      }
    `}
  >
    <div className="container">
      <Link to="/">
        <h1>Oswaldo Zárate</h1>
        <p>{"<Software Developer />"}</p>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
        <ul>
          <li className="social-icon">
            <a
              href="https://twitter.com/oswaldo_zc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="fa-sm" />
            </a>
          </li>
          <li className="social-icon">
            <a
              href="https://www.linkedin.com/in/oswaldo-zarate-44a714130/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="fa-sm" />
            </a>
          </li>
          <li className="social-icon">
            <a
              href="https://github.com/hiwaldo89"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="fa-sm" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
