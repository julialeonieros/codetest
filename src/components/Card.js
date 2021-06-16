import React from 'react'
import styled from 'styled-components/macro'

const Card = ({ image, name, surName, email, telephone }) => {

  const formattedNumber = `${telephone.slice(0, 3)} - ${telephone.slice(3,6)} ${telephone.slice(6, 8)} ${telephone.slice(8, 10)}`


  return (
    <CardContainer tabIndex='0'>
      <IMG
        src={image}
        alt={`${name} ${surName}`}  
      />
      <TextContainer>
        <NameContainer>
          <Name>{name}</Name>
          <Name>{surName}</Name>
        </NameContainer>
        <Contacts>{formattedNumber}</Contacts>
        <Contacts>{email}</Contacts>
      </TextContainer>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
  border: solid #999 0,1px;
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

  &:hover {
    width: 367px;
    height: 195px;
    transition-duration: 0.3s;
  }
`
const IMG = styled.img`
  width: 105px;
  margin-right: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TextContainer = styled.div`
`
const NameContainer = styled.div`
  border-bottom: solid #000 1px;
  padding-bottom: 7px;
  margin-bottom: 7px;
  width: fit-content;
`
const Name = styled.p`
  font-family: 'Trocchi', serif;
  font-weight: bold;
  font-size: 25px;
`
const Contacts = styled.p`
  font-size: 15px;
  margin: 3px 0;
  display: inline-block;
`