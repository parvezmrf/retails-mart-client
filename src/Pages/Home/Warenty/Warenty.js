import React from 'react';

const Warenty = () => {
    return (
        <div className='text-center my-5' >

            <div className="shadow max-md:w-full">

                <div className="stat-value">Any issue?</div>
                <div className="stat-value">Contact us</div>
                <div className="stat-title">Send your product with valid warenty card</div>
                <div className="stat-desc">You need to pay curiar bill</div>

            </div>

            <div className="form-control w-full max-w-lg mx-auto">
                <label className="label">
                    <span className="label-text">Your name</span>
                </label>
                <input type="text" placeholder="Type here" className=" mb-3 input input-bordered w-full max-w-xs" />



                <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                <input type="text" placeholder="+880" className=" mb-3 input input-bordered w-full max-w-xs" />


                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type="text" placeholder="Ex: LENOVO IDEAPAD S340" className=" mb-3 input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text">Your Location</span>
                </label>
                <input type="text" placeholder="Ex: LENOVO IDEAPAD S340" className=" mb-3 input input-bordered w-full max-w-xs" />


                <label className="label">
                    <span className="label-text">Waranty Date</span>
                </label>
                <input type="text" placeholder="Type here" className=" mb-3 input input-bordered w-full max-w-xs" />


                <label className="label">
                    <span className="label-text">Waranty Paper</span>
                </label>
                <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />


                <label className="label">
                    <span className="label-text">Problem with our products</span>
                </label>
                <textarea className="textarea textarea-primary" placeholder="Write Details bout your problem"></textarea>

                <button className="btn btn-primary my-3">Submit</button>




            </div>
        </div>
    );
};

export default Warenty;