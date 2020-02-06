import React, { Component } from 'react'
import { style_mapping } from "../styled";

const {
    shared: { WidgetContainer }
} = style_mapping;

class Widget extends Component {
  render() {
    return (
      <WidgetContainer>
        <h2>Status</h2>
        <ul>
          <li>online</li>
        </ul>
      </WidgetContainer>
    )
  }
}

export default Widget
