import React from 'react'
import styled from 'styled-components/macro'

const Card = ({ image, name, surName }) => {
  return (
    <Wrapper>
      <IMG
        src={image}
        alt={`${name} ${surName}`}  
      />
      <Details>
        <Contact>
          Name: {name} {surName}
        </Contact>
      </Details>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  border: solid black 2px;
  width: 230px;
  margin: 15px 5px 25px;

  @media (min-width: 767px){

  }
`
const IMG = styled.img`
`
const Details = styled.p`
  font-weight: bold;
`
const Contact = styled.p`

`
