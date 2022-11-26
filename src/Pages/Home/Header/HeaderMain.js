import React from 'react';
import Sponser from '../Sponser/Sponser';
import Divider from './Divider';
import Slider from './Slider';

const HeaderMain = () => {
    return (
        <div>
            <Slider></Slider>
            <Divider></Divider>
            <Sponser></Sponser>

        </div>
    );
};

export default HeaderMain;