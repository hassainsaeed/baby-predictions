import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = `Hussain & Naadi's Baby`
  const babyRegistryURI= `https://www.babylist.com/baby-naadirah`
  const babyRegistryTitle = `Baby Registry`
  const babyRegistryDescription = `Click here for our baby gift registry. While a gift is appreciated, it is not necessary. Baby just needs your love and duas!`
  const babyContestURI = `/babycontest`
  const babyContestTitle = `Baby Predictions Contest`
  const babyContestDescription = `Play a contest to see who can predict their gender, weight, birthday and time with the most accuracy. Whoever is the closest may be gifted a special surprise!`


    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <article
          className="post-list-item"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h2>
              <a href={babyRegistryURI} target="_blank" rel="noopener noreferrer">
                <span itemProp="headline">{babyRegistryTitle}</span>
              </a>
            </h2>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: babyRegistryDescription,
              }}
              itemProp="description"
            />
          </section>
        </article>
        <article
          className="post-list-item"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h2>
              <a href={babyContestURI} target="_blank" rel="noopener noreferrer">
                <span itemProp="headline">{babyContestTitle}</span>
              </a>
            </h2>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: babyContestDescription,
              }}
              itemProp="description"
            />
          </section>
        </article>
      </Layout>
    )

}

export default BlogIndex

