import React from 'react';
import { useQuery } from '@tanstack/react-query'
import ReportCard from './ReportCard';


const ReportedItems = () => {



    const { data: reportitems = [] } = useQuery({
        queryKey: ['reportsbookings'],
        queryFn: async () => {
            const res = await fetch('https://retails-mart-server.vercel.app/reportsbookings');
            const data = res.json();
            return data
        }
    })

    // console.log(reportitems)


    return (
        <div>
            <h2 className="text-2xl my-5 text-center">You have {reportitems.length} item reported! </h2>

            <div className='grid lg:grid-cols-3 gap-5' >
                {
                    reportitems.map(report => <ReportCard
                        key={report._id}
                        report={report}

                    ></ReportCard>)
                }
            </div>
        </div>
    );
};

export default ReportedItems;