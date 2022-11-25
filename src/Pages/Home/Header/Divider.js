import React from 'react';

const Divider = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row my-5 ">
            <div className="grid flex-grow h-24 card place-items-center">

                <div>
                    <h3 className="text-xl text-[#ff7701] font-medium">Free Shipping</h3>
                    <p className="text-lg">Free Shipping on all order</p>
                </div>

            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="grid flex-grow h-24 place-items-center">


                <div>
                    <h3 className="text-xl text-[#ff7701] font-medium">Online Support</h3>
                    <p className="text-lg">Support online 24/7</p>
                </div>

            </div>
            <div className="divider lg:divider-horizontal"></div>

            <div className="grid flex-grow h-24 place-items-center">

                <div>
                    <h3 className="text-xl text-[#ff7701] font-medium">Money Return</h3>
                    <p className="text-lg">Back Gurantee 7 day</p>
                </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>

            <div className="grid flex-grow h-24 place-items-center">

                <div>
                    <h3 className="text-xl text-[#ff7701] font-medium">Secure Payment</h3>
                    <p className="text-lg">Back Gurantee 7 day</p>
                </div>
            </div>
        </div>
    );
};

export default Divider;