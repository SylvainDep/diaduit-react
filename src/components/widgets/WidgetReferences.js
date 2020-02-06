import React, { Component } from 'react'
import { style_mapping } from "../styled";

import ReferenceItem from './ReferenceItem'

const {
    shared: { WidgetContainer }
} = style_mapping;

class WidgetReferences extends Component {
  render() {
    return (
      <WidgetContainer>
        <h2>References</h2>
        <ul>
          <li><ReferenceItem /></li>
          <li><ReferenceItem /></li>
          <li><ReferenceItem /></li>
        </ul>
      </WidgetContainer>
    )
  }
}

export default WidgetReferences
