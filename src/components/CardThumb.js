import React from 'react'
import styled from 'styled-components/macro'

const CardThumb = ({ id, image, name, surName }) => {
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

export default CardThumb

const Wrapper = styled.div`
  border: solid black 2px;
`
const IMG = styled.img`
`
const Details = styled.p`
  font-weight: bold;
`
const Contact = styled.p`

`