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
    <Wrapper>
      <Header>
        <H1>Visitkort</H1>
      </Header>
      <CardContainer>
        {businessCard.map(item => (
          <Card {...item} key={item.id}/>
        ))}
      </CardContainer>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  border: solid black 2px;
  margin: auto;
  width: 1000px;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Header = styled.header`
  background-color: pink;
`
const H1 = styled.h1`
  font-weight: bold;
  text-align: center;
`