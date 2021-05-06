import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll';
import ddlogo from '../media/pnplogo.png';

const Nav = styled.nav`
    height: 60px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width:100%;
    top: 0;
    z-index: 10;
    overflow: hidden;
    position: fixed;
    background:#FCECEC;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    max-width: 1100px
`

const NavLogo = styled(LinkR)`
    color: #b84d6d;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        color: #fff;
        transform: scale(1.1);
        animation: ease-in-out;
    }
    
`

const MobileIcons = styled.div`
    display: none;


    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        margin-top: -21px;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-top: 18px;
    font-size: 18px;
    
    @media screen and (max-width:768px){
        display:none
    }
`

const NavItem = styled.li`
    height: 60px;
    cursor:pointer;
    margin-right:60px;
`
const NavLinks = styled(LinkS)`
    cursor: pointer;
    color: #533E3E;
    align-items: center;
    display: flex;
    text-decoration: none;
    height: 100%;
    font-family: 'Poly', serif;
    font-size:30px;

    &.active{
        border-bottom: 10px solid #b84d6d;

    }
    &:hover{
        color: #b84d6d;
        transform: scale(1.1);
        animation: ease-in-out;
    }

`

const NavLinkR = styled(LinkR)`
    cursor: pointer;
    color: #fff;
    align-items: center;
    display: flex;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    
    

    &.active{
        border-bottom: 10px solid #b84d6d;

    }
    &:hover{
        color: #b84d6d;
        transform: scale(1.1);
        animation: ease-in-out;
    }

`

const Logo = styled.img`
    height:60px;
    width:60px;
`


const Navbar = (props)=>{
    const goToTop = ()=>{
        scroll.scrollToTop();
    }

    return (
        <div >
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} speed={500} spy={true} exact='true' offset={-80}>Menu</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="whatwedo" smooth={true} speed={500} spy={true} exact='true' offset={-80}>About Us</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavLogo to="/" onClick={goToTop}>
                    <Logo src={ddlogo}></Logo>
                    </NavLogo>

                    <MobileIcons onClick={props.toggle}><FaBars /></MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} speed={500} spy={true} exact='true' offset={-80}>Offers</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="whatwedo" smooth={true} speed={500} spy={true} exact='true' offset={-80}>Contact Us</NavLinks>
                        </NavItem>
                        

                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    );
}

export default Navbar;

