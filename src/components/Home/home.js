import React, { Fragment } from 'react';
import Benners from '../part/banners'
import Header from '../part/header'
import Footer from '../part/footer';


function Home() {
  return (
    <Fragment>
    <Header/>
    <Benners/>
    <Footer/>
    </Fragment>
  );
}

export default Home;