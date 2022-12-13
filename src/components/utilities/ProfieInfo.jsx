import React from "react";

export default function ProfieInfo({ name, title, icon }) {
  const ProfileIcon = icon;
  return (
    <div className="sm:flex mx-auto    border py-1 px-2 last:mt-5 rounded-md ">
      <ProfileIcon className="text-5xl mr-1 text-gray-700 " />
      <div>
        <div className="text-lg sm:leading-6 text-gray-700 font-semibold capitalize">
          {name}:
        </div>
        <div className="text-lg sm:leading-6 pr-0 break-all  capitalize">
          {title}
        </div>
      </div>
    </div>
  );
}
