"use client";
import React from "react";
import styled from "styled-components";
const NewsBox = styled.div`
  margin: 0;
  padding: 10px;
`;

const News = () => {
  return (
    <NewsBox className="bg-[white] ">
      <div className="border-[#000] bg-[white] text-[#000] shadow-md p-3">
        <p className="text-xs">2024.11.11</p>
        <h3 className="text-sm">11月11日 OPENのお知らせ</h3>
      </div>
    </NewsBox>
  );
};

export default News;
