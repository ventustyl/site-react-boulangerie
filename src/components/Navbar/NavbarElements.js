import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import { FcGenericSortingAsc } from "react-icons/fc";

export const Nav = styled.nav`

    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700; 
    background-color: transparent;
    `

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    
    @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
    `

export const NavIcon = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 0; 
    cursor: pointer
    color: #fff;
    
    
    p {
        transform: translate (-175%, 100%);
        font-weight: bold;
        color: white;
    }
    `
export const Bars = styled(FcGenericSortingAsc)`

    font-size: 2rem;
    color: white;,
    transform: translate (-50%, -15%);
    filter: hue-rotate(150deg);
    transform: rotate(180deg);
    height:40px;
    width: 40px;
    `



