"use client";
import React from "react";
import styled from "styled-components";
const ConceptBox = styled.div`
  padding: 30px 0;
  margin: 50px auto;

  border: 2px solid #333333a2;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #33333359;
`;

const Concept = () => {
  return (
    <ConceptBox className="md:w-[800px] md:mx-auto">
      <h3 className="text-xl text-center my-4">うえだの歴史</h3>
      <div className="px-4 text-sm md:text-xl md:px-20">
        <p className="">
          昭和49年:「双月」相川店をオープン（現在は閉店）
          <br />
          昭和59年:「双月」菅原店をオープン
          <br />
          令和6年:「焼きそばうえだ」西中島南方店をオープン
        </p>
        <div className="">
          <h3 className="text-xl text-center my-4">CONCEPT</h3>
          <p className="text-center my-3">『双月』の味</p>
          <p className="text-center my-3">そして父の想いを受け継ぐ新しい挑戦</p>
          <p className="leading-6 text-center">
            平成初期から東淀川区・菅原で愛され続ける老舗「双月」。この店で育った父の味と技術、そしてお客様への思いやりを息子の新たな店舗へと受け継ぎます。
            焼きそば屋として始める私の店は、父の作り上げた「双月」の伝統を新しい形で表現します。
            <br />
            シンプルでいて奥深い味わい、あの頃の記憶を呼び起こすような香りと共に、皆様に懐かしさと新しさを感じてもらえる店を目指しています。
            <br />
            「父の味から、新たな一皿を。」ぜひ、親子二代に渡る味の繋がりを体験してください。
          </p>
        </div>
      </div>
    </ConceptBox>
  );
};

export default Concept;
