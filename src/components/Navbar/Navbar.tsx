import React from "react";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b-[1px] border-black h-14 bg-gray-300 flex px-10 justify-between items-center">
      <Link href="/" className="font-bold">
        Logo
      </Link>
      <div className="flex justify-center items-center gap-10">
        <div className="flex relative cursor-pointer">
          <Bell />
          <div className="bg-red-500 w-[5px] h-[5px] rounded-full absolute left-4" />
        </div>
        <div className="flex gap-3">
          <p className="flex flex-col text-end">
            {" "}
            <span className="font-semibold">Raunak Khanna</span>{" "}
            <span className="font-light">Nepal</span>
          </p>
          <div className="cursor-pointer">
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
