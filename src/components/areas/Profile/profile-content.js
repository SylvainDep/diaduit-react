import React, { Component } from 'react'
import { style_mapping } from "../../styled";

import ProfileMain from './profile-main'
import ProfileSidebar from './profile-sidebar'

const {
    layout: { ContentArea, PageContent, BackgroundColor }
} = style_mapping;

class ProfileContent extends Component {
  render() {
    return (
      <BackgroundColor color="#f4f2f2">
        <ContentArea section>
          <PageContent>
            <ProfileSidebar />
            <ProfileMain />
          </PageContent>
        </ContentArea>
      </BackgroundColor>
    )
  }
}

export default ProfileContent
