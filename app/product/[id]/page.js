"use client";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const params = useParams();
  return (
    <main className="mt-[4rem]">
      <div className="bg-black p-4 flex justify-center text-white">
        <span className="text-[18px] ">
          Use code: <span className="text-primary">BLACKFRIDAY50</span> and SAVE
          50% on all 3D models prints
        </span>
      </div>
    </main>
  );
}

export default page;
