import React, { Component } from 'react'
import { style_mapping } from "../styled";

const {
    shared: { Medaillon, WidgetElementContainer },
    layout: { Grid }
} = style_mapping;

class ReferenceItem extends Component {
  render() {
    return (
      <WidgetElementContainer>
        <Grid>
          <Medaillon />
          <p>Bob, 14/10/2019</p>
        </Grid>
        <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis nibh ex, sit amet congue arcu sollicitudin nec. Vestibulum in magna non metus sollicitudin aliquet. Vestibulum porta viverra risus euismod lacinia. Morbi consectetur tincidunt tellus id dictum. Fusce id nulla euismod, suscipit felis quis, porta nunc. Vestibulum eu dapibus est.</i></p>
      </WidgetElementContainer>
    )
  }
}

export default ReferenceItem
