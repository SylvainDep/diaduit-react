import React, { Component } from 'react'
import { style_mapping } from "../styled";

const {
    layout: { WidgetGrid },
    shared: { WidgetContainer }
} = style_mapping;

class WidgetAbout extends Component {
  render() {
    return (
      <WidgetContainer>
        <h2>About Jean Lafraise</h2>
        <ul>
          <li>Male, from Paris, France</li>
          <li>Lives in Hamburg, France (11:53 UTC-03:00)</li>
          <li>User ID: 12345678</li>
        </ul>
        <WidgetGrid>
          <div>
            <h3>Jean would like to talk about:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, urna ac luctus sodales, leo metus faucibus diam, id iaculis metus leo a tortor.</p>
          </div>
          <div>
            <h3>Jean would like to exchange with:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, urna ac luctus sodales, leo metus faucibus diam, id iaculis metus leo a tortor.</p>
          </div>
          <div>
            <h3>Jean's goal:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, urna ac luctus sodales, leo metus faucibus diam, id iaculis metus leo a tortor.</p>
          </div>
        </WidgetGrid>
      </WidgetContainer>
    )
  }
}

export default WidgetAbout
