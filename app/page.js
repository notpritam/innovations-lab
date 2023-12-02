import HeroModel from "@/components/hero/heroModel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen mt-[4rem]">
      <div className="hero p-4  flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-2">
          <span className="text-[2rem] font-bold">
            Create. Print. Innovate.
          </span>
          <span>
            Unleashing Innovation in Every Layer .<br />
            Get your 3D assets printed. Showcase your 3D work. Buy & sell 3D
            models.
          </span>
        </div>
        <div className="h-[300px]">
          <HeroModel />
        </div>
      </div>
    </main>
  );
}
