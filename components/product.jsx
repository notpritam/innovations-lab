import Link from "next/link";
import React from "react";

function Product(props) {
  return (
    <Link href={props.product.link}>
      <div className="min-h-[300px] min-w-[300px] flex flex-col gap-4 bg-red">
        <img className="rounded-lg" src={props.product.img}></img>
        <div className="flex flex-col">
          <span className="text-[18px] font-medium">{props.product.title}</span>
          <span className="text-[14px] opacity-75">{props.product.title}</span>
          <span>₹50</span>
        </div>
      </div>
    </Link>
  );
}

export default Product;
