import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import MyProductCard from './MyProductCard';


const MyProduct = () => {

    const { user } = useContext(AuthContex)
    const [myproductpost, SetMyproductPost] = useState([])

    // console.log(user?.email)
    // console.log(myproductpost)


    useEffect(() => {
        fetch(`https://retails-mart-server.vercel.app/myproduct?email=${user?.email}`)
            .then(res => {

                return res.json()
            })
            .then(data => {
                SetMyproductPost(data)
            })
    }, [user?.email])











    const myproductpostdelete = id => {
        const procced = window.confirm('Want to sure delete your product?');
        if (procced) {
            fetch(`https://retails-mart-server.vercel.app/myproduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted')

                    }
                })
        }
    }





    return (


        <div className='grid grid-cols-1 gap-4 p-10' >
            {myproductpost?.length ? <> {
                myproductpost.map(myprod => <MyProductCard
                    key={myprod._id}
                    myprod={myprod}
                    myproductpostdelete={myproductpostdelete}
                ></MyProductCard>)
            }</> : <> <p className='text-center text-3xl font-semibold'>No Product Added by you</p></>
            }
        </div>

    );
};

export default MyProduct;