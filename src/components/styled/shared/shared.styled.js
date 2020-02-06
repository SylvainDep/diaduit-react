import styled, { css } from 'styled-components';
import { dark_grey, blue, white } from "../constants.styled";

const Banner = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    background-color: turquoise;
`;

const WidgetContainer = styled.div`
    background-color: #fdfdfd;
    border-radius: 5px;
    border: 1px solid #ede9e9;
    margin-bottom: 18px;
    color: #797979;

    > span,  > p {
      margin: 0 0 10px 0;
      padding: 0 25px;
    }

    h2, h3 {
      color: #424242;
      font-size: 15px;
      font-weight: 500;
    }

    h2 {
      display: inline-block;
      margin: 0 0 30px 0;
      padding: 20px 20px 10px;
      position: relative;
      width: 100%;

      :before {
        bottom: 0;
        content: "";
        height: 2px;
        left: 20px;
        position: absolute;
        width: 20%;
        background: ${blue};
      }
    }

    ul {
      display: inline-block;
      list-style: outside none none;
      margin-bottom: 0;
      padding: 0 25px 20px;
      width: 100%;
      margin: 0;

      li:not(:last-child) {
        margin-bottom: 20px;
        width: 100%;
      }
    }
`;

const WidgetElementContainer = styled.div`
    padding: 20px 20px 0 20px;
    background-color: #fdfdfd;
    border-radius: 5px;
    border: 1px solid #ede9e9;
    margin-bottom: 18px;
    color: #797979;
`;

const Button = styled.a`
    padding: 10px 20px;
    border-radius: 2px;
    background-color: ${props => props.primary ? blue : white};
    color: ${props => props.primary ? white : dark_grey};
`;

const SidebarContainer = styled.div`
    flex-basis: 250px;
    margin-right: 20px;
`;

const MainContentContainer = styled.div`
    flex: 1;
`;

const Medaillon = styled.div`
    height: 60px;
    width: 60px;
    background-color: purple;
    border-radius: 30px;
`;

const GalleryItem = styled.div`
    flex-basis: 25%;
    padding-bottom: 25%;
    background: url(${props => props.img}) no-repeat center center;
    background-size: cover;
    border: 5px solid white;
`;

const GalleryGrid = styled.div`
    padding: 0 25px 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
`;

const FooterContainer = styled.div`
    position: relative;
    padding: 75px 0;
    color: #545454;
    font-size: 14px;
    line-height: 26px;

    h2, h3 {
      color: #424242;
      font-size: 15px;
      font-weight: 500;
    }

    h2 {
      display: inline-block;
      margin: 0 0 20px 0;
      padding: 0 0 10px;
      position: relative;
      width: 100%;

      :before {
        bottom: 0;
        content: "";
        height: 2px;
        left: 0;
        position: absolute;
        width: 20%;
        background: ${blue};
      }
    }

    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 5px;
      width: 100%;
      background: rgba(0, 0, 0, 0) linear-gradient(to right, #ffffff 0%, #2fa7cd 50%, #ffffff 100%) repeat scroll 0 0;
    }
`;

const FooterList = styled.ul`
    ${ props => {
      if (props.main) {
        return css`
          width: 350px;
          padding-right: 20px;
          padding-left: 0;
        `
      } else {
        return css`
          flex: 1;
          padding-right: 10px;
          padding-left: 0;
        `
      }
    }}
`;

const Bottom = styled.div`
    background-color: #f6f6f6;
`;

const ListItemContainer = styled.div`
    display: flex;
    margin-bottom: 10px;

    .svg_holder {
      display: flex;
      justify-content: center;
      margin-right: 15px;
      flex-basis: 20px;

      svg {
        height: 26px;
      }
    }
`;

export default {
    Banner,
    Button,
    WidgetContainer,
    SidebarContainer,
    MainContentContainer,
    Medaillon,
    WidgetElementContainer,
    GalleryItem,
    GalleryGrid,
    FooterContainer,
    FooterList,
    Bottom,
    ListItemContainer
}
