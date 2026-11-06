import * as React from "react"
import type { HeadFC } from "gatsby"
import { Parallax, type IParallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"

const Cara = () => {
  const parallax = React.useRef<IParallax>(null)
  return (
    <Layout>
      <Parallax ref={parallax} pages={5}>
        <Hero offset={0} factor={1} onViewProjects={() => parallax.current?.scrollTo(1.65)} />
        <Projects offset={1} factor={2} />
        <About offset={3} factor={1} />
        <Contact offset={4} factor={1} />
      </Parallax>
    </Layout>
  )
}

export default Cara

export const Head: HeadFC = () => <Seo />
