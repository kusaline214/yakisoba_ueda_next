"use client";
import React from "react";
import styled from "styled-components";

const BottomLogo = styled.div`
  background-image: url("/logo.JPG");
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 350px;
`;

const Footer = () => {
  return (<>
    <div className="md:w-[800px] md:mx-auto">
      <div className="flex justify-between mx-auto border-b-[1px] my-[20px]">
        <a href="">
          <p className="decoration">NEWS</p>
        </a>
        <a href="">
          <p>INSTAGRAM</p>
        </a>
      </div>
      <div className="p-4 md:flex md:justify-center md:items-center">
        <BottomLogo></BottomLogo>
        <p className="text-xs md:text-sm md:font-bold">
          〒532-0011
          <br />
          大阪府大阪市東淀川区西中島4-3-4 チサン第6新大阪1階
          <br />
          tel&nbsp;080-3854-4574
          <br /> 営業時間&nbsp;11:00〜14:00 17時〜22時 <br />
          定休日&nbsp;無し
        </p>
      </div>
    </div>
      <div className="w-[100vw] text-center text-xs h-[2rem] flex justify-center items-center text-white bg-black">
        COPYRIGHT 2024 UEDA.
      </div>
      </>
  );
};

export default Footer;
