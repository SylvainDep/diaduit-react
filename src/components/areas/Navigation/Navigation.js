import React, { Component } from 'react'
import { style_mapping } from "../../styled";

import mainLogo from '../../../assets/logo/logo.png';

import MainMenu from './main-menu';
import AuthMenu from './auth-menu';

const {
    navigation: { MenuTabs, Navbar },
    layout: { ContentArea, Grid }
} = style_mapping;

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <ContentArea>
          <Grid>
            <img  src={mainLogo} alt="logo"/>
            <Grid>
              <MainMenu />
              <AuthMenu />
            </Grid>
          </Grid>
        </ContentArea>
      </Navbar>
    )
  }
}

export default Navigation
