"use client";
import News from "./components/News";
import Concept from "./components/Concept";
import Commitment from "./components/Commitment";
import Menu from "./components/Menu";
import Map from "./components/Map";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";

const NewsBox = styled.div`
  border: 1px solid #333333a2;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #33333359;
`;

export default function Home() {
  return (
    <div>
      <Header />
      <NewsBox className="md:max-w-[800px] md:mx-auto m-y-[20px]">
        <h2 className="text-[1.5rem] text-black text-center my-[10px]">NEWS</h2>
        <News />
        <News />
        <News />
        <div className="w-[40%] text-white rounded-md h-[2rem] bg-[#000] flex justify-center items-center mx-auto my-[20px] p-2 text-xs">
          お知らせ一覧
        </div>
      </NewsBox>
      <Concept />
      <Commitment />
      <Menu />
      <div className="md:flex">
        <Map />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
