import React from 'react'
import styled from 'styled-components/macro'

const Card = ({ image, name, surName, email, telephone }) => {

  const telephoneNr = `${telephone.slice(0, 3)} - ${telephone.slice(3,6)} ${telephone.slice(6, 8)} ${telephone.slice(8, 10)}`


  return (
    <CardContainer>
      <IMG
        src={image}
        alt={`${name} ${surName}`}  
      />
      <TextContainer>
        <NameContainer>
          <Name>{name} {surName}</Name>
        </NameContainer>
        <Contacts>{telephoneNr}</Contacts>
        <Contacts>{email}</Contacts>
      </TextContainer>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
  border: solid black 2px;
  background-color: #FFF;
  width: 350px;
  height: 185px;
  border-radius: 3px;
  margin: 15px 0 25px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 767px){

  }
`
const IMG = styled.img`
  width: 105px;
  margin-right: 20px;
  border-radius: 50%;
`
const TextContainer = styled.div`
`
const NameContainer = styled.div`
  // border-bottom: solid #000 1px;
  border: solid #000 1px;
  margin-bottom: 5px;
  width: -moz-fit-content;
  width: fit-content;
`
const Name = styled.p`
  font-family: 'Trocchi', serif;
  font-weight: bold;
  font-size: 25px;
  display: inline-block;
`
const Contacts = styled.p`
  font-size: 14px;
`