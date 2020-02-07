import React, { Component } from 'react'
import { style_mapping } from "../styled";

import PartnerItem from './PartnerItem'

const {
    shared: { WidgetContainer }
} = style_mapping;

class WidgetReferences extends Component {
  render() {
    return (
      <WidgetContainer>
        <h2>Suggested</h2>
        <ul>
          <li><PartnerItem /></li>
          <li><PartnerItem /></li>
          <li><PartnerItem /></li>
        </ul>
      </WidgetContainer>
    )
  }
}

export default WidgetReferences
