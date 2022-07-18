
import Home from '../../components/About/HomeSection'
import About from '../../components/About/AboutSection'
import Brands from '../../components/About/BrandsSection'
import Services from '../../components/About/ServicesSection'
import Video from '../../components/About/VideoSection'

export default function HomePage() {
  return (
        <>
          <Home/>
          <About/>
          <Video/>
          <Services/>
          <Brands/>
        </>
  )



}