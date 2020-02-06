import styled from 'styled-components';
import { dark_grey, light_grey, blue } from "../constants.styled";

const ProfileHeaderContainer = styled.div`
    display: flex;
    height: 180px;
    width: 1000px;
    max-width: calc(100% - 20px);
    margin: auto;
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
`;

const ProfilePicture = styled.div`
    width: 140px;
    height: 140px;
    border-radiux: 80px;
    background-color: red;
`;

const ProfileResume = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 140px);
`;

const ProfileHeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 120px;
`;

const ProfileHeaderBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding-left: 20px;
`;

const ProfileName = styled.div`
    color: ${blue};
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.1px;
`;

const ProfileCommands = styled.div`
    &>* {
      margin-left: 30px;
    }

    span {
      color: #fff;
      text-shadow: 0 0 10px #4a4a4a;
    }
`;

const ProfileLinks = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${dark_grey};

    ul {
      list-style-type: none;
      display: flex;

      li {
        margin-left: 20px;
      }
    }
`;

const LanguageList = styled.ul`

`;

const LanguageItem = styled.li`

`;

export default {
    ProfileHeaderContainer,
    ProfilePicture,
    ProfileResume,
    ProfileName,
    ProfileCommands,
    ProfileHeaderTop,
    ProfileHeaderBottom,
    ProfileLinks,
    LanguageList,
    LanguageItem
}
