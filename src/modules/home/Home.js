import React, { useState,useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        //call api
    },[])    
    return (
            <Carousel >
                { products.length ? products : <h1>Loading...</h1>}
            </Carousel>
        );
};

export default Home;
