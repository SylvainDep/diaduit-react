import React, { Component } from 'react'
import { style_mapping } from "../../styled";
import Widget from '../../widgets/Widget'

import WidgetMenu from '../../widgets/WidgetMenu'

const {
    shared: { SidebarContainer },
    layout: { ContentArea, Grid, BackgroundColor }
} = style_mapping;

class HomepageSidebarRight extends Component {
  render() {
    return (
      <SidebarContainer>
        <Widget />
        <WidgetMenu title="Links" />
      </SidebarContainer>
    )
  }
}

export default HomepageSidebarRight
