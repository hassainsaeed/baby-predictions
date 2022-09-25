import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = `Baby Predictions`

    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          Baby Saeed is due Feb 23! 
        </p>
        <p>
          So let's see who can predict their gender, weight, birthday and time with the most accuracy.
        </p>
        <p>
          Whoever guesses correctly, may be gifted with a special surprise once Baby arrives!
        </p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3pNQT8m-45S3rjPqlH9rXiNHlq60Xt0M6zPZQSxnE9hmuwg/viewform?embedded=true" 
        width="640" height="1402" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </Layout>
    )

}

export default BlogIndex

