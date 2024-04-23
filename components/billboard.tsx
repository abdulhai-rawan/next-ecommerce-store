import { Billboard as BillboardType } from "@/types";
import React from "react";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      {/* The height must be h-auto but due to picture problems i temporary set it to h-[500px]
          same as the width must be removed when finding a good picture */}
      <div
        className="h-[500px] w-full rounded-xl relative aspect-square md:aspect[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-5-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:mx-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
