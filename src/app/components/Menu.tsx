import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ConceptBox = styled.div`
  padding: 30px 10px;
  margin: 50px auto;

  border: 2px solid #333333a2;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #33333359;
`;

const Menu = () => {
  return (
    <ConceptBox className=" p-5 flex flex-col justify-center md:w-[800px] mx-auto">
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
    </ConceptBox>
  );
};

export default Menu;
