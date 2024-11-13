import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className=" p-5 flex flex-col justify-center md:w-[800px] mx-auto">
      <h2 className="text-xl text-center my-5">MENU</h2>
      <p className="text-sm leading-7">
        初めての方は絶品の焼きそばをご賞味下さい！
        <br />
        生卵を絡めて食べるのもお楽しみ下さい
      </p>
      <div className="flex justify-between my-[30px]">
        <Image src={"/logo.JPG"} alt={""} width={200} height={200} />
        <Image src={"/logo.JPG"} alt={""} width={200} height={200} />
      </div>
      <button className="w-[50%] md:w-[250px] text-xs mx-auto bg-black text-white py-2 my-[10px] rounded-md">
        メニューはこちらから
      </button>
    </div>
  );
};

export default Menu;
