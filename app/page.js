import CategoryList from "@/components/categoryList";
import HeroModel from "@/components/hero/heroModel";
import Product from "@/components/product";
import product from "@/components/product";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      title: "Product Title 1",
      link: "/product/1",
      keywords: ["keyword1", "keyword2"],
      img: "https://img.freepik.com/premium-photo/realistic-3d-isometric-room_756748-75735.jpg",
    },
    {
      title: "Product Title 2",
      link: "/product/2",
      keywords: ["keyword2", "keyword3"],
      img: "https://img.freepik.com/premium-photo/realistic-3d-isometric-room_756748-75735.jpg",
    },
    {
      title: "Product Title 3",
      link: "/product/3",
      keywords: ["keyword3", "keyword4"],
      img: "https://img.freepik.com/premium-photo/realistic-3d-isometric-room_756748-75735.jpg",
    },
    {
      title: "Product Title 4",
      link: "/product/4",
      keywords: ["keyword4", "keyword5"],
      img: "https://img.freepik.com/premium-photo/realistic-3d-isometric-room_756748-75735.jpg",
    },
    {
      title: "Product Title 5",
      link: "/product/5",
      keywords: ["keyword5", "keyword6"],
      img: "https://img.freepik.com/premium-photo/realistic-3d-isometric-room_756748-75735.jpg",
    },
    {
      title: "Product Title 6",
      link: "/product/6",
      keywords: ["keyword6", "keyword7"],
      img: "https://img.freepik.com/premium-photo/realistic-3d-isometric-room_756748-75735.jpg",
    },
    {
      title: "Product Title 7",
      link: "/product/7",
      keywords: ["keyword7", "keyword8"],
      img: "https://img.freepik.com/premium-photo/realistic-3d-isometric-room_756748-75735.jpg",
    },
    {
      title: "Product Title 8",
      link: "/product/8",
      keywords: ["keyword8", "keyword9"],
      img: "https://img.freepik.com/premium-photo/realistic-3d-isometric-room_756748-75735.jpg",
    },
  ];
  return (
    <main className="w-screen flex flex-col items-center mt-[4rem]">
      <div className="w-[95%] max-w-[1440px]">
        <div className="hero p-4  lg:h-[600px] lg:items-center flex flex-col lg:flex-row gap-8 w-full">
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
              <Button>
                <Link href={"/product"}>Explore</Link>
              </Button>
              <Button>
                <Link href="/auth">Join Us</Link>
              </Button>
            </div>
          </div>
          <div className="h-[300px] lg:flex-1">
            <HeroModel />
          </div>
        </div>

        <div className="flex mt-[2rem] gap-6 flex-col">
          <div className="flex justify-between">
            <span className="text-[2rem] font-bold">Latest Products</span>
            <span>View All</span>
          </div>
          <div className="flex mt-[1rem] hide-scrollbar mb-[2rem] gap-[2rem] overflow-x-scroll bg-red">
            {products.map((product) => (
              <>
                <Product product={product} />
              </>
            ))}
          </div>
        </div>
        <div className="flex mt-[2rem] gap-6 flex-col">
          <div className="flex justify-between">
            <span className="text-[2rem] font-bold">Trending Products</span>
            <span>View All</span>
          </div>
          <div className="flex mt-[1rem] hide-scrollbar mb-[2rem] gap-[2rem] overflow-x-scroll bg-red">
            {products.map((product) => (
              <>
                <Product product={product} />
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-[2rem] mb-[2rem] lg:mb-[4rem] lg:mt-[4rem]">
          <div className="">
            <span className="text-[2rem] font-bold">Choose Your Category</span>
          </div>
          <CategoryList />
        </div>

        <div className="flex items-center lg:pt-[4rem] lg:pb-[4rem] flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4">
            <span>Contempary design</span>
            <span className="text-[3rem]">
              The spring <strong>summer</strong> <br />
              cool 3d printed collection.
            </span>
            <Button>Shop Now</Button>
          </div>
          <div className="flex gap-[2rem] lg:justify-between">
            <img
              className="h-[300px]"
              src="https://th.bing.com/th?id=OPA.TkLuZIeRLNw9Ww474C474&w=592&h=550&o=5&pid=21.1"
            ></img>
            <img
              className="h-[300px] translate-y-[100px]"
              src="https://th.bing.com/th?id=OPA.d%2bFkbl8zk31%2bJw474C474&w=592&h=550&o=5&pid=21.1"
            ></img>
          </div>
        </div>
      </div>
    </main>
  );
}
