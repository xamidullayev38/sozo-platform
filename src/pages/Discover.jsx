import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero/Hero'
import { Box, styled } from '@mui/material'
const Wrapper = styled(Box)`
    overflow-y: auto; 
    height: 100vh;
    scrollbar-width: none;
`
export default function Discover() {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
    </Wrapper>
  )
}
