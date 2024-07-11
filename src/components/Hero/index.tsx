// Hero.tsx
import React from 'react'
import { HeroWrapper, HeroContent, HeroTitle } from '../../styles/HeroStyles'

const Hero = () => (
  <HeroWrapper>
    <HeroContent className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </HeroContent>
  </HeroWrapper>
)

export default Hero
