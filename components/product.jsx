import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Product(props) {
  return (
    <Link href={props.product.link}>
      <div className="min-h-[300px] min-w-[300px] flex flex-col gap-4 bg-red">
        <img className="rounded-lg" src={props.product.img}></img>
        <div className="flex justify-between">
          <span className="text-[18px] font-medium">{props.product.title}</span>
          <span className="font-bold">₹50</span>
        </div>
        <Button className="w-[100px] hover:text-white">Add to Cart</Button>
      </div>
    </Link>
  );
}

export default Product;
