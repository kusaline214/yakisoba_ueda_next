import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="md:max-w-[1200px] md:m-auto">
      <Image
        src={"/logo.jpg"}
        alt={""}
        width={1280}
        height={720}
        className=""
      ></Image>
    </div>
  );
};

export default Header;
