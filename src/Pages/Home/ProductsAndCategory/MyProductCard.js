import React from 'react';
import toast from 'react-hot-toast';


const MyProductCard = ({ myprod, myproductpostdelete }) => {

    const addtosponser = () => {
        const img = myprod.img
        const title = myprod.title
        const offer_price = myprod.offer_price
        const org_price = myprod.org_price


        const addSponser = {
            img,
            title,
            offer_price,
            org_price
        }

        // console.log(addSponser)


        fetch('https://retails-mart-server.vercel.app/sponsers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addSponser)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {

                    toast.success('Product Added to sponser!!', {
                        duration: 3000
                    })


                }
            })


    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-48 p-2' src={myprod.img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{myprod.title}</h2>
                <p>{myprod.location} | Price: ${myprod.offer_price} | Price: ${myprod.org_price} | Location:  | {myprod.core} | {myprod.ram}  </p>
                <p> Date of Booking: {myprod.post_date}  </p>
                <div className="card-actions justify-end">
                    <button onClick={() => addtosponser()} className="btn btn-primary btn-sm">Add to sponser</button>
                    <button onClick={() => myproductpostdelete(myprod._id)} className="btn btn-secondary btn-sm">Delete This</button>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;