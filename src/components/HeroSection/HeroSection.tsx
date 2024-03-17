import Link from "next/link";
import Table from "../Table";
import { profileLink } from "./heroSectionData";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-screen flex gap-4">
      <div className="bg-gray-300 hidden md:flex items-start flex-col pt-10 gap-14 w-72 px-4 md:px-14">
        <div className="flex gap-4 flex-wrap md:flex-nowrap sm:justify-center">
          <Image
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
            alt="ProfileImage"
            width={70}
            height={60}
            className="rounded-full cursor-pointer"
          />
          <p className="flex flex-col">
            Raunak Khanna
            <span>raunak@mail.com</span>
            <span className="px-2 py-1 bg-purple-300 rounded-full">
              Web Developer
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {profileLink.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className="flex gap-4 items-center"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1">
        {" "}
        <Table />
      </div>
    </div>
  );
};

export default HeroSection;
