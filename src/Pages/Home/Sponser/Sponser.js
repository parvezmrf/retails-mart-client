import React from 'react';
import { useQuery } from '@tanstack/react-query'
import SponserCard from './SponserCard';


const Sponser = () => {


    const { data: sponsers = [] } = useQuery({
        queryKey: ['sponsers'],
        queryFn: async () => {
            const res = await fetch('https://retails-mart-server.vercel.app/sponsers');
            const data = res.json();
            return data
        }
    })
    // console.log(sponsers)



    return (
        <div className='grid lg:grid-cols-4 gap-5' >
            {
                sponsers.map(sponser => <SponserCard
                    key={sponser._id}
                    sponser={sponser}
                ></SponserCard>)
            }
        </div>
    );
};

export default Sponser;