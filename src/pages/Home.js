import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';
import Navbar1 from '../components/Navbar1';

const Home=()=>{
    return (
        <>
        <Main/>
        <Row title="Up Coming" fetchURL={requests.requestUpcoming}/>
        <Row title="Popular" fetchURL={requests.requestPopular}/>
        <Row title="TopRated" fetchURL={requests.requestTopRated}/>
        <Row title="Trending" fetchURL={requests.requestTrending}/>
        {/* <Row title="Horror" fetchURL={requests.requestHorror}/> */}
        <Navbar1/>
</>
        )
}
export default Home;