import { React, useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { URL } from '../reusables/URL'
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'


const Main = () => {

  const [businessCard, setBusinessCard] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setBusinessCard(data))
    },[])

  return (
    <>
      <Header />
      <Wrapper>
        <H1 tabIndex='0'>Våra visitkort</H1>
        <CardContainer>
          {businessCard.map(item => (
            <Card {...item} key={item.id}/>
          ))}
        </CardContainer>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Main

const Wrapper = styled.div`
  margin-top: 100px;
`

const CardContainer = styled.div`
  border: solid green 2px;
  width: 95%;
  margin: 20px auto 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px){
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-around;
  }
`
const H1 = styled.h1`
  font-weight: bold;
  text-align: center;
`
