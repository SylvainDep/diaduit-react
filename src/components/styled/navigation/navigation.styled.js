import styled from 'styled-components';
import { dark_grey, light_grey } from "../constants.styled";

const Navbar = styled.div`
    display: flex;
    width: 100%;
    height: 60px;

    li {
      padding: 0 20px;
    }
`;

const MenuListLeft = styled.ul`
    display: flex;
    list-style-type: none;
    padding-left: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${dark_grey};
    letter-spacing: 0.3px;
`;

const MenuListRight = styled.ul`
    display: flex;
    list-style-type: none;
    padding-left: 0;
    color: ${light_grey};
`;

export default {
    MenuListLeft,
    MenuListRight,
    Navbar
}
