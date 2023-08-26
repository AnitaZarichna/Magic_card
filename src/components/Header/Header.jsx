import PropTypes from 'prop-types';
import { HeaderBlock , HeaderLogo } from './Header.styled';
import logo from "../../images/logo256.png"


export function Header () {
    return (
<HeaderBlock>
    <HeaderLogo src={logo} alt="logo" width="20"></HeaderLogo>
    
</HeaderBlock>
    )
}