import styled from 'styled-components';
import { dark_grey, light_grey } from "../constants.styled";

const Navbar = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 1000;
    background-color: white;
`;

const MenuListLeft = styled.ul`
    display: flex;
    list-style-type: none;
    padding-left: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${dark_grey};
    letter-spacing: 0.3px;

    li {
      padding: 0 20px;
    }
`;

const MenuListRight = styled.ul`
    display: flex;
    list-style-type: none;
    padding-left: 0;
    color: ${light_grey};

    li {
      padding-left: 20px;
    }
`;

export default {
    MenuListLeft,
    MenuListRight,
    Navbar
}
