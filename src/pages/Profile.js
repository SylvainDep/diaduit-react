import React, { Component } from 'react'
import { style_mapping } from "../components/styled";

import HeaderBanner from '../components/shared/HeaderBanner'
import ProfileHeader from '../components/areas/Profile/profile-header'
import ProfileContent from '../components/areas/Profile/profile-content'
import Footer from '../components/areas/Footer/Footer'

const {
    layout: { Header },
} = style_mapping;

class Profile extends Component {
  render() {
    return (
      <>
        <Header>
          <HeaderBanner />
          <ProfileHeader />
        </Header>
        <ProfileContent />
        <Footer />
      </>
    )
  }
}

export default Profile
