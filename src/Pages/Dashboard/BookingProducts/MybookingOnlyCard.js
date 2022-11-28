import React from 'react';

const MybookingOnlyCard = ({ book, bookDelete }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-32 p-2' src={book.img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{book.product.slice(0, 30)}</h2>
                <p> Price: ${book.price}  </p>
                <p> Date of Booking: ${book.dateTime}  </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Payment</button>
                    <button onClick={() => bookDelete(book._id)} className="btn btn-secondary btn-sm">Delete This </button>
                </div>
            </div>
        </div>
    );
};

export default MybookingOnlyCard;