import React from 'react';
import Common from './Common';
import web from '../src/images/logo.svg'

const Home = () => {
  return (
    <>
      <Common name="Grow your business with us" imgsrc={web} visit="/service" btname="Get Started"/>
    </>
  );
}

export default Home;