import React, { Component } from 'react'
import { style_mapping } from "../styled";

const {
    layout: { WidgetGrid },
    shared: { WidgetContainer },
    profile: { LanguageList, LanguageItem }
} = style_mapping;

class WidgetLanguages extends Component {
  render() {
    return (
      <WidgetContainer>
        <h2>Profile</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, urna ac luctus sodales, leo metus faucibus diam, id iaculis metus leo a tortor.</p>
        <WidgetGrid>
          <div>
            <h3>Langues parlées</h3>
            <LanguageList>
              <LanguageItem>Lorem Ipsum</LanguageItem>
              <LanguageItem>Lorem Ipsum</LanguageItem>
              <LanguageItem>Lorem Ipsum</LanguageItem>
            </LanguageList>
          </div>
          <div>
            <h3>Langues en cours d'apprentissage</h3>
            <LanguageList>
              <LanguageItem>Lorem Ipsum</LanguageItem>
              <LanguageItem>Lorem Ipsum</LanguageItem>
              <LanguageItem>Lorem Ipsum</LanguageItem>
            </LanguageList>
          </div>
        </WidgetGrid>
      </WidgetContainer>
    )
  }
}

export default WidgetLanguages
