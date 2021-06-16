import { React, useEffect, useState } from 'react'
import styled from 'styled-components'

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
      <CardContainer>
        {businessCard.map(item => (
          <Card {...item} key={item.id}/>
        ))}
      </CardContainer>
      <Footer />
    </>
  )
}

export default Main

const CardContainer = styled.div`
  border: solid green 2px;
  width: 95%;
  margin: 0 auto 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px){
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-around;
  }
`
