import { React, useEffect, useState } from 'react'
import styled from 'styled-components'

import Card from '../components/Card'
import { URL } from '../reusables/URL'

const Main = () => {

  const [businessCard, setBusinessCard] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setBusinessCard(data))
    },[])

  return (
    // <Wrapper>
    <>
      <Header>
        <H1>Our business cards</H1>
      </Header>
      <CardContainer>
        {businessCard.map(item => (
          <Card {...item} key={item.id}/>
        ))}
      </CardContainer>
    </>

    // </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  border: solid purple 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 1000px;
  background-color: #999;
`
const CardContainer = styled.div`
  border: solid green 2px;
  width: 95%;
  margin: 0 auto 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.header`
  background-color: pink;
  margin-top: 30px;
`
const H1 = styled.h1`
  font-weight: bold;
  text-align: center;
`