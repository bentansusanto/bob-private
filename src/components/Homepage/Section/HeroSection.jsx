import React from 'react'
import Patern from '../../../assets/patern.svg'
import BgHeroSection from '../../../assets/bg-herosection.svg'

const herosection = {
  title : "Les privat terbaik dengan instruktur terbaik.",
  content  : "Request kebutuhan guru les private di Jakarta untuk online /offline (guru datang ke rumahmu). Dengan kemampuan yang mumpuni di bidangnya, berkomitmen memiliki integritas yang tinggi, serta profesional."
}

const HeroSection = ({matches}) => {
  return (
    <div id='about'>
      {
        matches ? 
        (<div className='bg-gradient-to-r from-[#0066FF] to-[#61CCFA] w-screen h-[80vh] mt-5'>
        
        </div>) : 
        (<div className='bg-gradient-to-r from-blue-500 to-cyan-500 w-screen h-[80vh] pt-52 px-24'>
            <div className='flex'>
              <div>
              <img src={Patern} alt="bg-hero-section" />
                  <h1 className='mt-10 font-bold text-white'>{herosection.title}</h1>
                  <p className='w-[85%] text-white'>{herosection.content}</p>
              </div>
              <img src={BgHeroSection} alt="bg-hero-section" className='w-[49%]'/>
            </div>
        </div>)
      }
    </div>
  )
}

export default HeroSection