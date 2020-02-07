import React, { Component } from 'react'
import { style_mapping } from "../../styled";
import Widget from '../../widgets/Widget'

import WidgetSuggestedPartners from '../../widgets/WidgetSuggestedPartners'
import WidgetAbout from '../../widgets/WidgetAbout'
import WidgetReferences from '../../widgets/WidgetReferences'
import WidgetGallery from '../../widgets/WidgetGallery'

const {
    shared: { MainContentContainer },
    layout: { ContentArea, Grid, BackgroundColor }
} = style_mapping;

class HomepageMain extends Component {
  render() {
    return (
      <MainContentContainer>
        <WidgetSuggestedPartners />
        <WidgetAbout title="About Jean Lafraise" />
        <WidgetReferences />
        <WidgetGallery />
      </MainContentContainer>
    )
  }
}

export default HomepageMain
