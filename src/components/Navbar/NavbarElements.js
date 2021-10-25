import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
    background-color: var(--dark);
    position: fixed;
    width:95vw;
    height: 5vh;

    display:flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;
    z-index: 999;
`;

export const Logo = styled(Link)`
    color: var(--red);
   display: flex;
   align-items: center;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   text-decoration: none;

    @media screen and (max-width: 720px){
        padding: 0 0.7rem;
    }
    font-style:italic;
`;

export const HamburgerIcon = styled.i`
    display:none;

    @media screen and (max-width:720px){
        z-index: 999;
        display:block;
        height: 100%;
        width: 12vh;
        font-size: 2rem;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 25%);
        color:var(--light);
    }
`;

export const Navmenu = styled.div`
    width: 30%;
    display:flex;
    justify-content: space-around;
    align-items: center;
   
    @media screen and (max-width:720px){
        background:var(--dark);
        width: 100vw;
        height:${({ click }) => (click ? '100vh' : '')};
        padding: 1rem 0;
        position: absolute;
        top:0;
        left: ${({ click }) => (click ? 0 : '-150vw')};
        display:flex;
        flex-direction: column;
        opacity:1;
        transition: all 0.5s ease;
    }
`;

export const NavmenuLink = styled(Link)`
    color: var(--light);
    text-transform: uppercase;
   display: flex;
   align-items: center;
   padding: 0 1rem;
   cursor: pointer;
   text-decoration: none;

    @media screen and (max-width:720px){
        text-align: center;
        padding: 0 0.7rem;
        width: 100%;
        align-self: center;
    }
    &:hover{
        transition: all 0.5s ease;
        margin-bottom: 5px;
        border-bottom: 2px solid var(--red);
    }
    
`;

export const NavBtn = styled.div`
    display:flex;
    align-items: center;
    margin-right: 3rem;
    
    @media screen and (max-width:720px){
        display:flex;
        justify-content: center;
        align-items:center;
        width: 100%;
        height: 2rem;
        margin: 0;
    }
`;