import React from "react"
import { Global, css } from "@emotion/core"
import "../../node_modules/normalize.css/normalize.css"
import "typeface-libre-baskerville"
import "typeface-lato"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          background-color: #133d66;
          color: #faf7e6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: "Lato", sans-serif;
          font-size: 18px;
          line-height: 1.5;
          letter-spacing: 1px;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .container {
          width: 100%;
          padding: 0 15px;
          margin: auto;
          @media (min-width: 992px) {
            width: 920px;
          }
          @media (min-width: 1200px) {
            width: 1140px;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Libre Baskerville", serif;
            letter-spacing: 0.2rem;
          }
        }
      `}
    />
    <Header />
    {children}
  </>
)

export default Layout
