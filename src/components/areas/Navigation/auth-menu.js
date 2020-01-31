import React, { Component } from 'react'
import { style_mapping } from "../../styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faBell, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import mainLogo from '../../../assets/logo/logo.png';

const {
    navigation: { MenuListRight }
} = style_mapping;

class Authmenu extends Component {
  render() {
    return (
      <MenuListRight>
        <li><FontAwesomeIcon icon={faSearch} /></li>
        <li><FontAwesomeIcon icon={faHome} /></li>
        <li><FontAwesomeIcon icon={faBell} /></li>
        <li><FontAwesomeIcon icon={faCommentAlt} /></li>
        <li></li>
      </MenuListRight>
    )
  }
}

export default Authmenu
