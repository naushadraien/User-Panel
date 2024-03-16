import React from "react";
import { Bell } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-b-[1px] border-black h-14 bg-gray-300 flex px-4 justify-between items-center">
      <div className="font-bold">Logo</div>
      <div className="flex justify-center items-center gap-10">
        <div className="flex relative">
          <Bell />
          <div className="bg-red-500 w-[5px] h-[5px] rounded-full absolute left-4" />
        </div>
        <div className="flex gap-3">
          <p className="flex flex-col text-end">
            {" "}
            Raunak Khanna <span className="font-light">Nepal</span>
          </p>
          <div>
            <Image
              src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
              width={40}
              height={40}
              alt="ProfileImage"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
