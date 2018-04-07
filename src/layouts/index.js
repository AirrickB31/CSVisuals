import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import {
  Hero,
  HeroBody
} from 'bloomer'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Bulma & Bloomer" />
    <Hero isHalfHeight isColor="black">
      

      <HeroBody>{children()}</HeroBody>

      
    </Hero>
    
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
