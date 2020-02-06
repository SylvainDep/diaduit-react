import React, { Component } from 'react'
import { style_mapping } from "../styled";

const {
    shared: { Banner }
} = style_mapping;

class Navigation extends Component {
  render() {
    return (
      <Banner />
    )
  }
}

export default Navigation
