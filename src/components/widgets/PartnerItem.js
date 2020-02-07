import React, { Component } from 'react'
import { style_mapping } from "../styled";

const {
    shared: { Button, Medaillon, MedaillonText, WidgetElementContainer },
    layout: { Grid }
} = style_mapping;

class PartnerItem extends Component {
  render() {
    return (
      <WidgetElementContainer>
        <Grid>
          <Medaillon />
          <MedaillonText>
            <h3>Pierre Dupont, 30</h3>
            <h4>Speaks:</h4>
            <span>French, English</span>
            <h4>Learns:</h4>
            <span>Spanish, Japanese, Deutsch</span>
          </MedaillonText>
        </Grid>
      </WidgetElementContainer>
    )
  }
}

export default PartnerItem
