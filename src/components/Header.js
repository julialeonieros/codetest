import React from 'react'
import styled from 'styled-components/macro'

const Header = () => {
  return (
    <Wrapper>
        <H1>Our business cards</H1>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  background-color: pink;
  margin-top: 20px;
`
const H1 = styled.h1`
  font-weight: bold;
  text-align: center;
`