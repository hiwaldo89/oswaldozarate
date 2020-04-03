import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/pro-regular-svg-icons"

const Resume = () => (
  <Layout>
    <div
      className="container"
      css={css`
        padding-top: 3rem;
        padding-bottom: 3rem;
        h1 {
          display: none;
        }
        h2 {
          border-bottom: solid 1px #faf7e6;
        }
        h3 a {
          color: inherit;
        }
        .resume-block {
          margin-bottom: 3rem;
          .resume-block__row {
            display: flex;
            flex-wrap: wrap;
            margin-left: -15px;
            margin-right: -15px;
            .resume-block__col {
              padding-left: 15px;
              padding-right: 15px;
            }
          }
        }
      `}
    >
      <div className="resume-block">
        <h2>Education</h2>
        <h3>Tecnológico de Monterrey</h3>
        <ul>
          <li>
            <strong>Degree:</strong> Marketing & communications
          </li>
          <li>Aug 2010 - May 2013</li>
        </ul>
        <h3>Dev.F</h3>
        <ul>
          <li>Software Development</li>
          <li>Feb 2020 - Mar 2020</li>
        </ul>
        <h3>Online education</h3>
        <ul>
          <li>
            <strong>Treehouse:</strong> HTML, CSS, JavaScript, PHP
          </li>
          <li>
            <strong>Udemy courses:</strong> NodeJs, Vue js, Nuxt js
          </li>
          <li>
            <strong>VueMastery:</strong> Vue js, Vuex, Vuetify, Nuxt js
          </li>
          <li>
            <strong>Frontend Masters:</strong> JavaScript, React, Data
            Structures & Algorithms
          </li>
        </ul>
      </div>
      <div className="resume-block">
        <h2>Experience</h2>
        <h3>
          Brand Industry (2018 - present){" "}
          <a
            href="https://thebrandindustry.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLink} className="fa-xs" />
          </a>
        </h3>
        <ul>
          <li>Frontend Developer</li>
          <li>Implemented version control using git.</li>
          <li>Custom web design using Craft CMS.</li>
          <li>
            Fixed bugs and implemented new functionalities for sites developed
            in Craft CMS.
          </li>
          <li>Used Vue JS for some sections of the websites.</li>
        </ul>
        <h3>
          Elliot (2017 - 2019){" "}
          <a href="http://elliot.mx" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} className="fa-xs" />
          </a>
        </h3>
        <ul>
          <li>Frontend Developer</li>
          <li>
            Worked on the frontend for a custom web application developed in
            Ruby on Rails. The application is named WedJourney and it’s used to
            manage wedding suppliers.
          </li>
          <li>Customized and fixed bugs in websites developed in WordPress.</li>
        </ul>
        <h3>
          dood (2016 - 2017){" "}
          <a href="https://dood.mx" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} className="fa-xs" />
          </a>
        </h3>
        <ul>
          <li>Frontend Developer</li>
          <li>Created custom websites using WordPress.</li>
          <li>Created custom websites using Craft CMS.</li>
          <li>
            Worked with Shopify and WooCommerce for custom e-commerce solutions.
          </li>
          <li>Created wireframes using sketch app.</li>
        </ul>
        <h3>
          Bloom Studio (2014 - present){" "}
          <a
            href="https://somosbloom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLink} className="fa-xs" />
          </a>
        </h3>
        <ul>
          <li>Bloom Studio is a personal brand for all my freelance work.</li>
          <li>Adapted custom website designs to the WordPress platform.</li>
          <li>
            Implemented a custom web application for managing events developed
            in Vue JS for the frontend and the WordPress API for the backend.
          </li>
          <li>Created custom websites using Gridsome Static Site Generator.</li>
          <li>
            Worked with WooCommerce and Shopify to develop custom e-commerce
            sites.
          </li>
        </ul>
      </div>
      <div className="resume-block">
        <h2>Skills</h2>
        <h3>Software</h3>
        <div className="resume-block__row">
          <div className="resume-block__col">
            <ul>
              <li>JavaScript</li>
              <li>Gatsby</li>
              <li>Vue.js</li>
              <li>Nuxt.js</li>
              <li>React</li>
              <li>Gridsome</li>
            </ul>
          </div>
          <div className="resume-block__col">
            <ul>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Sass</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>Craft CMS</li>
            </ul>
          </div>
          <div className="resume-block__col">
            <ul>
              <li>Shopify</li>
              <li>Git</li>
              <li>Node.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
        <h3>Design</h3>
        <ul>
          <li>Sketch app</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default Resume
