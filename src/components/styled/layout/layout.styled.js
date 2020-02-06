import styled from 'styled-components';
import { white } from "../constants.styled";


const BackgroundColor = styled.div`
    background-color: ${props => props.color ? props.color : white};
`;

const Header = styled.div`
    position: relative;
    margin-bottom: 60px;
`;

const ContentArea = styled.div`
    padding: ${props => props.section ? '20px 0' : '0'};
    height: 100%;
    width: 1000px;
    max-width: calc(100% - 20px);
    margin: auto;
`;

const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.top ? 'flex-start' : 'center'};
    height: 100%;
    flex: 1;
    flex-wrap: wrap;
`;

const PageContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    width: 100%;
`;

const WidgetGrid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    padding: 0 25px 20px;

    > * {
      flex: 1;

      &:not(:last-child) {
        margin-right: 5px;
      }
    }
`;

export default {
    BackgroundColor,
    ContentArea,
    Grid,
    Header,
    PageContent,
    WidgetGrid
}
