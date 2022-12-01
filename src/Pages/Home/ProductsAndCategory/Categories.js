import React from 'react';
import { Link } from "react-router-dom";

const Categories = () => {
    return (

        <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">

            <li> <Link to='/'>All Product</Link></li>
            <li> <Link to='/asus'>Asusss</Link></li>
            <li> <Link to='/dell'>Dell</Link></li>
            <li> <Link to='/lenovo'>Lenovo</Link></li>

        </ul>

    );
};

export default Categories;