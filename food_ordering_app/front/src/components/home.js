import React from 'react'
import Header from './pages/Header/header';
import Sliderr from './pages/sliderr';
import Section from './pages/Section/section';
import styled from 'styled-components';
import Footer from './pages/Footer/footer'
const home = () => {
  return (
    <>
    <Header/>
    <Containerr>
        <Sliderr/>
        <Section/> 
        <Footer/>
    </Containerr>
        </>
  )
}
const Containerr = styled.div`
      overflow:hidden;
      display:block-inline
`
export default home