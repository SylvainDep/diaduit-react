import React, { Component } from 'react'
import { style_mapping } from "../../styled";

import mainLogo from '../../../assets/logo/logo.png';

const {
    navigation: { MenuListLeft }
} = style_mapping;

class MainMenu extends Component {
  render() {
    return (
      <MenuListLeft>
        <li>Home</li>
        <li>Messages</li>
        <li>Search</li>
      </MenuListLeft>
    )
  }
}

export default MainMenu
