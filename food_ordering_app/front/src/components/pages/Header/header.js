import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Log from './loggg.png'
const Header = () => {
  return(
    <Nav>
      <Logo>
      <img src={Log} alt="" style={{float:'left'}}/>
      </Logo>
      <span>Chef's Kitchen</span>
      <Navmenu>
      <Link  to = "/">Home</Link>
      <Link  to = "/About">About</Link>
      <Link  to = "/menu">Menu</Link>
      <Link  to = "/contact">Contact</Link>
      <Link  to = "/review">Review</Link>
      </Navmenu>
    </Nav>
  )
} 
  const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 75px;
  background-color:black  ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 2;
  span{
    display: flex;
      align-items: center;
      color:Orange;
      font-size: 30px;
      font-family:Cursive;
      padding-left:40px;
      font-weight:700;
  }
 
`;
const Logo = styled.div`
padding: 0;
width: 80px;
margin: 5px;
img {
  // padding-left:60px;
  width: 60px;
  height:80px;
  display:inline-block;
}

`
const Navmenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-flow: row;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 700px;
    a{
      display: flex;
      align-items: center;
      padding: 0 15px;
      text-decoration: none;
      color:white;
      font-size: 20px;
    &:hover{
      text-decoration: underline;
      text-underline-offset: 8px;
  
    }
    }
    `;
export default Header;
