import React, { useState, useEffect } from 'react';
import * as ELEM from './NavbarElements';
import { navData as data } from '../../data';
import { Button } from '../../GlobalStyle';
import { RiMenu3Line, RiMenuFill } from 'react-icons/ri'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 720) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    useEffect(() => showButton, []);

    window.addEventListener('resize', showButton);


    return (
        <ELEM.Navbar>
            <ELEM.Logo onClick={closeMobileMenu}> ELIXIR </ELEM.Logo>
            <ELEM.HamburgerIcon onClick={handleClick} >
                {click ? <RiMenu3Line /> : <RiMenuFill />}
            </ELEM.HamburgerIcon>
            <ELEM.Navmenu onClick={handleClick} click={click}>
                {data.map((data, index) => {
                    if (data.id !== "btn") {
                        return <ELEM.NavmenuLink to={data.path} key={index}>
                            {data.id}
                        </ELEM.NavmenuLink>
                    } else {
                        return <ELEM.NavBtn>
                            {button ? (
                                <Button transition to={data.path} key={index}>
                                    {data.btnTxt}
                                </Button>) : (
                                <Button transition big to={data.path} key={index}>
                                    {data.btnTxt}
                                </Button>
                            )}
                        </ELEM.NavBtn>
                    }
                })}
            </ELEM.Navmenu>
        </ELEM.Navbar>
    )
}

export default Navbar
