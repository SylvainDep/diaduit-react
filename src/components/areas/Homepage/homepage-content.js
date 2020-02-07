import React, { Component } from 'react'
import { style_mapping } from "../../styled";

import HomepageMain from './homepage-main'
import HomepageSidebarLeft from './homepage-sidebar-left'
import HomepageSidebarRight from './homepage-sidebar-right'

const {
    layout: { ContentArea, PageContent, BackgroundColor }
} = style_mapping;

class ProfileContent extends Component {
  render() {
    return (
      <BackgroundColor color="#f4f2f2">
        <ContentArea section>
          <PageContent>
            <HomepageSidebarLeft />
            <HomepageMain />
            <HomepageSidebarRight />
          </PageContent>
        </ContentArea>
      </BackgroundColor>
    )
  }
}

export default ProfileContent
