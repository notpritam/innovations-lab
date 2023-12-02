import HeroModel from "@/components/hero/heroModel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen mt-[4rem]">
      <div className="hero p-4 lg:p-12  flex flex-col lg:flex-row gap-8 w-full">
        <div className="flex lg:flex-1 lg:gap-4 flex-col gap-2">
          <span className="text-[2rem] lg:text-[6rem] font-bold lg:leading-[5.8rem]">
            Create. Print. Innovate.
          </span>
          <span className="text-[18px] opacity-60">
            Unleashing Innovation in Every Layer .<br />
            Get your 3D assets printed. Showcase your 3D work. Buy & sell 3D
            models.
          </span>
          <div className="flex gap-4">
            <Button>Explore</Button>
            <Button>Join Us</Button>
          </div>
        </div>
        <div className="h-[300px] lg:flex-1">
          <HeroModel />
        </div>
      </div>
    </main>
  );
}
