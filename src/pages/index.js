import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "David Kelly"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Hey
          <img style={{ display: 'inline-block', marginLeft: '1rem',marginBottom: '0', width: '11%'}} src="./smalldave.png" alt="DKProfile" />
        </h1>
        <p>I'm David, a Software Engineer currently working for Liberty IT in Belfast</p>
        <p>
          Apart from loving all things Javascript, I love playing and watching football and most of all spending time with my beautiful Fiancé and Pomeranian Marla!
        </p>
        <p>Check out my blog for some random snippets and brain dumps</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
