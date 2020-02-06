import React, { Component } from 'react'
import { style_mapping } from "../styled";

const {
    shared: { WidgetContainer }
} = style_mapping;

class WidgetMenu extends Component {
  render() {
    return (
      <WidgetContainer>
        <h2>{this.props.title}</h2>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </WidgetContainer>
    )
  }
}

export default WidgetMenu
