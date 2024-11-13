import React from "react";

const Map = () => {
  return (
    <div className="md:w-[50vw]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.1268592561682!2d135.4951051122419!3d34.72719658167609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e43ab3bd147d%3A0xcd7e93d9706e54c7!2z44CSNTMyLTAwMTEg5aSn6Ziq5bqc5aSn6Ziq5biC5reA5bed5Yy66KW_5Lit5bO277yU5LiB55uu77yT4oiS77yUIOODgeOCteODs-esrDbmlrDlpKfpmKo!5e0!3m2!1sja!2sjp!4v1730955172739!5m2!1sja!2sjp"
        width="100%"
        height="450"
        // style="border: 0"
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
