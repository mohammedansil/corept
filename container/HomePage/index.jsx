
// import HomeSection from '../components/Home/HomeSection'
// import AboutPage from '../components/Home/AboutSection'
// import BrandsSection from '../components/Home/BrandsSection'
// import CounterSection from '../components/Home/CounterSection'
// import FaqSection from '../components/Home/FaqSection'
// import ProjectSection from '../components/Home/ProjectsSection'
// import QuoteSection from '../components/Home/QuoteSection'
// import ServicesSection from '../components/Home/ServicesSection'


import Home from '../../components/Home/HomeSection'
import About from '../../components/Home/AboutSection'
import Brands from '../../components/Home/BrandsSection'
import Counter from '../../components/Home/CounterSection'
import Faq from '../../components/Home/FaqSection'
import Project from '../../components/Home/ProjectsSection'
import Quote from '../../components/Home/QuoteSection'
import Services from '../../components/Home/ServicesSection'

export default function HomePage() {
  return (
        <>
          <Home/>
          <About/>
          <Counter/>
          <Services/>
          <Project/>
          <Quote/>
          <Faq/>
          <Brands/>
        </>
  )



}