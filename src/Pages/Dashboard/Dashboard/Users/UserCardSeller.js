import React from 'react';

const UserCardSeller = ({ usr, userDelete, handleMakeVerify }) => {
    const { name, role, shop, phone, email, _id, profile } = usr

    // console.log(usr.profile)
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

                        <div className="badge  badge-primary text-white font-semibold mx-1">{role}</div>

                        {usr?.profile && <div className="badge  badge-primary text-white font-semibold mx-1">{profile}</div>}

                    </div>
                </div>
            </td>
            <td>
                {shop}
                <br />
                <span className="badge badge-ghost badge-sm"> Location: Bangladesh </span>
            </td>
            <td>
                {email}
                <br />
                {phone}
            </td>
            <th>
                <button onClick={() => userDelete(_id)} className=" btn btn-primary btn-outline btn-xs">Delete</button>

                {usr.profile === 'verified' ? '' : <button onClick={() => handleMakeVerify(_id)} className=" btn btn-primary btn-outline btn-xs mx-1">verify </button>}

                <button className=" btn btn-primary btn-outline btn-xs">Make Admin</button>
            </th>
        </tr>
    );
};

export default UserCardSeller;