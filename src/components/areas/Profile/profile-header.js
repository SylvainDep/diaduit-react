import React, { Component } from 'react'
import { style_mapping } from "../../styled";

const {
    layout: { ContentArea },
    profile: {
      ProfileHeaderContainer,
      ProfilePicture,
      ProfileResume,
      ProfileHeaderTop,
      ProfileHeaderBottom,
      ProfileLinks,
      ProfileName,
      ProfileCommands
    },
    shared: { Button }
} = style_mapping;

class ProfileHeader extends Component {
  render() {
    return (
      <ProfileHeaderContainer>
        <ProfilePicture />
        <ProfileResume>
          <ProfileHeaderTop>
            <ProfileCommands>
              <span>1234 followers</span>
              <Button>Add a friend</Button>
              <Button primary>Send message</Button>
            </ProfileCommands>
          </ProfileHeaderTop>
          <ProfileHeaderBottom>
            <ProfileName>Jean Lafraise</ProfileName>
            <ProfileLinks>
              <ul>
                <li>Friends</li>
                <li>Photos</li>
                <li>His Tips</li>
                <li>More</li>
              </ul>
            </ProfileLinks>
          </ProfileHeaderBottom>
        </ProfileResume>
      </ProfileHeaderContainer>
    )
  }
}

export default ProfileHeader
