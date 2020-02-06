import React, { Component } from 'react'
import { style_mapping } from "../styled";

import Music from '../../assets/img/music.jpg'

const {
    shared: { WidgetContainer, GalleryGrid, GalleryItem }
} = style_mapping;

class WidgetGallery extends Component {
  render() {
    return (
      <WidgetContainer>
        <h2>Photos</h2>
        <GalleryGrid>
          <GalleryItem img={Music} />
          <GalleryItem img={Music} />
          <GalleryItem img={Music} />
          <GalleryItem img={Music} />
          <GalleryItem img={Music} />
          <GalleryItem img={Music} />
        </GalleryGrid>
      </WidgetContainer>
    )
  }
}

export default WidgetGallery
