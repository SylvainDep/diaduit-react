import React, { Component } from 'react'
import { style_mapping } from "../styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const {
    shared: { ListItemContainer }
} = style_mapping;

class ListItem extends Component {
  render() {
    let icon;

    if (this.props.icon) {
        icon = <div className="svg_holder"><FontAwesomeIcon icon={this.props.icon} size="lg" /></div>
    }

    return (
      <ListItemContainer>
        {icon}
        <span>{this.props.label}</span>
      </ListItemContainer>
    )
  }
}

export default ListItem
