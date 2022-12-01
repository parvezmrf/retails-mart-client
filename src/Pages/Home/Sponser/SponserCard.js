import React from 'react';

const SponserCard = ({ sponser }) => {
    return (
        <div className="card bg-base-100 shadow-sm  hover:bg-base-100">

            <div className="badge badge-warning gap-2 m-2">

                sponsered
            </div>


            <img src={sponser.img} alt="picturess" />
            <div className="card-body">
                <h2 className="card-title"> {sponser.title.slice(0, 20)} </h2>
                <p className='text-3xl font-bold text-primary text-center'>
                    Only ${sponser.offer_price} <br /> for today
                </p>

            </div>
        </div>
    );
};

export default SponserCard;