import React, { Component } from 'react'
import { style_mapping } from "../components/styled";

import HeaderBanner from '../components/shared/HeaderBanner'
import HomepageContent from '../components/areas/Homepage/homepage-content'
import Footer from '../components/areas/Footer/Footer'

const {
    layout: { Header },
} = style_mapping;

class Homepage extends Component {
  render() {
    return (
      <>
        <HomepageContent />
        <Footer />
      </>
    )
  }
}

export default Homepage
