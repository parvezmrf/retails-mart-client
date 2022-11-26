import React from 'react';

const Categories = () => {
    return (
        <div>
            <h2 className="text-2xl">All Category</h2>

            <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
                <li><button> All</button></li>
                <li><button> Asus</button></li>
                <li><button> Dell</button></li>
                <li><button> Lenovo</button></li>
            </ul>
        </div>
    );
};

export default Categories;