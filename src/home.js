import React, { Fragment } from 'react';
import Benners from './components/common/banners'
import Header from './components/common/header'
import Footer from './components/common/footer';


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