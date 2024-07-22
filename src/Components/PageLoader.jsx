import React from "react";

const PageLoader = () => {
  return (
    <div className="w-full h-screen fixed z-[100] flex justify-center items-center bg-hero">
      <div class="ploader-container">
        <div class="cube">
          <div class="cube__inner"></div>
        </div>
        <div class="cube">
          <div class="cube__inner"></div>
        </div>
        <div class="cube">
          <div class="cube__inner"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
