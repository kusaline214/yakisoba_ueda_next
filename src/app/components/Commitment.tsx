"use client";
import React from "react";
import styled from "styled-components";

const CommitmentBox = styled.div`
  border: 2px solid #333333a2;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #33333359;
`;

const Commitment = () => {
  return (
    <CommitmentBox className="my-[30px] p-3 md:w-[800px] md:mx-auto">
      <h2 className="text-xl text-center my-3">こだわり</h2>
      <p className="text-[1rem] leading-5 text-center">
        特にソースは自信を持っています <br />
        毎日野菜、果物を特性スパイスをブレンドして作っています
        ぜひご賞味ください
      </p>
    </CommitmentBox>
  );
};

export default Commitment;
