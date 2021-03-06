import React from "react"
import { graphql } from "gatsby"
import BackgroundSection from "../components/Global/BackgroundSection"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/Home/Info"
// import { FaGulp } from "react-icons/fa"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    {/* <FaGulp /> //for favicon image */}
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="regular joe's"
      styleClass="default-background"
    />
    <Info />
  </Layout>
)
/*writing query in graphql play it copy it and paste it here(for it import graphql above and add IndexPage = ({ data }))*/

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
