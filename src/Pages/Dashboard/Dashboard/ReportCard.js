import React, { useContext } from 'react';
import { AuthContex } from '../../../contexts/AuthProvider';

const ReportCard = ({ report }) => {
    const { user } = useContext(AuthContex)
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="flex p-5">
                <div>
                    <img className='w-20' src={report.img} alt="" srcSet="" />
                </div>
                <div>
                    <p className="text-xl"> {report.product.slice(0, 40)} </p>
                    <p>
                        <span className='mx-1'> Seller: {report.name} </span>
                    </p>


                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className=" ">
                                Reported by <br />

                                <div className="badge badge-info ">
                                    {report.reporter}

                                </div>
                            </div>
                        </div>


                        <div className="chat-bubble chat-bubble-warning">"{report.reportmsg}"
                        </div>
                    </div>











                </div>
            </div>
        </div>
    );
};

export default ReportCard;