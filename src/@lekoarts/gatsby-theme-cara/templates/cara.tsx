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
      <Parallax ref={parallax} pages={4.8}>
        <Hero offset={0} factor={1} onViewProjects={() => parallax.current?.scrollTo(window.innerWidth < 768 ? 1.1 : 1.25)} />
        <Projects offset={1} factor={1.8} />
        <About offset={2.8} factor={1} />
        <Contact offset={3.8} factor={1} />
      </Parallax>
    </Layout>
  )
}

export default Cara

export const Head: HeadFC = () => <Seo />
