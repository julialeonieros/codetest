import React from 'react'
import styled from 'styled-components/macro'

const Footer = () => {
  return (
    <Wrapper>
      <a title="Gå till kontaktformulär" href="https://www.cgi.com/se/sv/cgi-sverige">
        <Button>Kontakt</Button>
      </a>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background: -webkit-gradient(linear,right top,left top,from(#5236ab),to(#e41937));
`
const Button = styled.button`
  border-radius: 8px;
  background-color: #FFF;
  padding: 10px 20px;
  border: solid #FFF 1.5px;
  border-radius: 50px;
  outline: none;
  width: 120px;
  color: #5236ab;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`
