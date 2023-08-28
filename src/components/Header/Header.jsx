import PropTypes from 'prop-types';
import { HeaderBlock , Logo, LogoSection, LogoName } from './Header.styled';
import { ThemeSection , NameTheme} from './ThemeSwicher.styled';
import logo from "../../images/logo256.png"
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';


export function Header () {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => setTheme (theme === `light` ? `dark` : `light`);

    useEffect(()=> {
        document.body.setAttribute('data-theme' , theme)
    }, [theme])
    return (
<HeaderBlock>
    <LogoSection>
    <Logo src={logo} alt="logo" width="20"></Logo>
    <LogoName>Magic Ball</LogoName>
    </LogoSection>
    <ThemeSection onClick= {toggleTheme}>
        {theme === 'light' ? (<IoMoonOutline color = '#02a2f9' />) : (<IoMoonSharp color = '#b002ba'/>) }
      <LogoName>{theme} Theme</LogoName>
    </ThemeSection>
</HeaderBlock>
    )
}