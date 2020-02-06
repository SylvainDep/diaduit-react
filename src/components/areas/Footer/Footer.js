import React, { Component } from 'react'
import { style_mapping } from "../../styled";
import {
  faMapMarkedAlt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons'

import mainLogo from '../../../assets/logo/logo.png';
import creditCards from '../../../assets/img/credit-cards.png';

import ListItem from '../../shared/ListItem';

const {
    shared: { FooterContainer, FooterList, Bottom },
    layout: { ContentArea, Grid }
} = style_mapping;

class Footer extends Component {
  render() {
    return (
      <>
        <FooterContainer>
          <ContentArea>
            <Grid top>
              <FooterList main>
                <img  src={mainLogo} alt="logo"/>
                <p>The trio took this simple idea and built it into the world’s leading carpooling platform.</p>
                <ListItem icon={faMapMarkedAlt} label="33 new montgomery st.750 san francisco, CA USA 94105." />
                <ListItem icon={faMobileAlt} label="+1-56-346 345" />
              </FooterList>
              <FooterList>
                <h2>Follow us</h2>
                <ListItem icon={faFacebookSquare} label="Facebook" />
                <ListItem icon={faTwitterSquare} label="Twitter" />
                <ListItem icon={faInstagramSquare} label="Instagram" />
                <ListItem icon={faPinterestSquare} label="Pinterest" />
              </FooterList>
              <FooterList>
                <h2>Navigate</h2>
                <ListItem label="About Us"/>
                <ListItem label="Contact Us"/>
                <ListItem label="Terms & Conditions"/>
                <ListItem label="RSS Syndication"/>
                <ListItem label="Sitemap"/>
              </FooterList>
              <FooterList>
                <h2>Useful Links</h2>
                <ListItem label="Leasing"/>
                <ListItem label="Submit Route"/>
                <ListItem label="How Does It Work?"/>
                <ListItem label="Agent Listings"/>
                <ListItem label="View All"/>
              </FooterList>
              <FooterList>
                <h2>Download Apps</h2>
                <ListItem label="Facebook"></ListItem>
                <ListItem label="Facebook"></ListItem>
                <ListItem label="Facebook"></ListItem>
              </FooterList>
            </Grid>
          </ContentArea>
        </FooterContainer>
        <Bottom>
          <ContentArea>
            <Grid>
              <p>Sylvain Depardieu 2020. All rights reserved.</p>
              <img  src={creditCards} alt="credit cards"/>
            </Grid>
          </ContentArea>
        </Bottom>
      </>
    )
  }
}

export default Footer
