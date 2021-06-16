import React from 'react'
import styled from 'styled-components/macro'


const Header = () => {

  return (
    <Wrapper>
      <Logo tabIndex="0">Logo</Logo>
      <Nav>
        <A title="Gå till CGI Sverige" href="https://www.cgi.com/se/sv/cgi-sverige">Meny</A>
        <A title="Gå till CGI Sverige" href="https://www.cgi.com/se/sv/cgi-sverige">Meny</A>
        <A title="Gå till CGI Sverige" href="https://www.cgi.com/se/sv/cgi-sverige">Meny</A>
      </Nav>
      <Hamburger>
        <Div></Div>
        <Div></Div>
        <Div></Div>
      </Hamburger>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  background-color: #FFF;
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 0.5px 1px rgb(0 0 0 / 25%);
  position: fixed;
  top: 0;
`
const Logo = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  background-color: #5236ab;
  color: #FFF;
  font-weight: bold;
`
const Nav = styled.nav`
  margin-left: 30px;
`
const A = styled.a`
  color: #000;
  margin-left: 16px;
  text-decoration: none;
  margin-left: 35px;
  font-weight: bold;
  cursor: pointer;
  display: none;

  @media (min-width: 757px) {
    display: inline;
  }
`
const Hamburger = styled.div`
  display: flex;
  width: 30px;
  height: 25px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;

  @media (min-width: 757px) {
    display: none;
  }
`
const Div = styled.div`
  width: 30px;
  height: 5px;
  background-color: #000;
  border-radius: 5px;
`

