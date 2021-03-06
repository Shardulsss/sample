import styled from 'styled-components';
import {Link} from 'react-scroll';

const ButtonMain = styled(Link)`
    border-radius: 30px;
    background: #D52435;
    white-space: nowrap;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 8px 8px 8px;

    &:hover{
        background: #b84d6d;
        transform: scale(1.1);
        transition: 0.2s;
        animation: ease-in-out;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
        padding: 5px 15px 5px 15px;
    }
`
export default ButtonMain;