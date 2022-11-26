import React from 'react';
import Divider from '../Header/Divider';
import Slider from '../Header/Slider';
import ProductsAndCategory from '../ProductsAndCategory/ProductsAndCategory';
import Sponser from '../Sponser/Sponser';
import Warenty from '../Warenty/Warenty';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Divider></Divider>
            <Sponser></Sponser>
            <ProductsAndCategory></ProductsAndCategory>
            <Warenty></Warenty>
        </div>
    );
};

export default Home;