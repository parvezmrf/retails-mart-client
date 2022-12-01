import React from 'react';

const UserCard = ({ usr, userDelete, handleMakeAdmin }) => {
    const { name, role, email, _id } = usr
    // console.log(usr)
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" alt="Avatar" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="badge  badge-primary text-white font-semibold mx-1"> {role}  </div>


                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">Location: Bangladesh</span>
            </td>
            <th>


                {
                    usr?.role !== 'admin' ? <><button onClick={() => userDelete(_id)} className=" btn btn-primary btn-outline btn-xs">Delete</button>
                        <button onClick={() => handleMakeAdmin(_id)} className=" btn btn-primary btn-outline btn-xs">Make Admin</button></>
                        :
                        <p>This is Admin</p>
                }


            </th>
        </tr>
    );
};

export default UserCard;