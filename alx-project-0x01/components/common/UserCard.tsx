import React from "react";
import { UserProps } from "../../interfaces";
<UserProps></UserProps>

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 m-3 border border-gray-200 w-[300px]">
      <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>

      <div className="mt-3 text-sm">
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">Website:</span> {user.website}</p>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p>{user.company.name}</p>
        <p className="text-xs text-gray-500">"{user.company.catchPhrase}"</p>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p>
          {user.address.suite}, {user.address.street},<br />
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
