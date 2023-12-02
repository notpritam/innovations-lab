import Link from "next/link";

function CategoryList() {
  const categoryList = [
    "All",
    "Art",
    "Architecture",
    "Fashion",
    "Gadgets",
    "Games",
    "Interior",
    "Jewellery",
    "Medical",
    "Nature",
    "People",
    "Sports",
    "Tech",
    "Transport",
    "Weapons",
  ];

  const categoryListWithImages = [
    {
      name: "All",
      image: "https://opensea.io/static/images/categories/maverick-art.png",
    },
    {
      name: "Gaming",
      image: "https://opensea.io/static/images/categories/maverick-gaming.png",
    },
    {
      name: "Membership",
      image:
        "https://opensea.io/static/images/categories/maverick-membership.png",
    },
    {
      name: "Fashion",
      image:
        "https://opensea.io/static/images/categories/maverick-photography.png",
    },
    {
      name: "Gadgets",
      image: "https://opensea.io/static/images/categories/maverick-art.png",
    },
    {
      name: "Games",
      image: "https://opensea.io/static/images/categories/maverick-art.png",
    },
    {
      name: "Interior",
      image: "https://opensea.io/static/images/categories/maverick-art.png",
    },
    {
      name: "Jewellery",
      image: "https://opensea.io/static/images/categories/maverick-art.png",
    },
    {
      name: "Medical",
      image: "https://opensea.io/static/images/categories/maverick-art.png",
    },
    {
      name: "Nature",
      image: "https://opensea.io/static/images/categories/maverick-art.png",
    },
  ];
  return (
    <div className="flex gap-4 overflow-x-scroll hide-scrollbar">
      {categoryListWithImages.map((category) => (
        <>
          <Link href="/product">
            <div className="rounded-md overflow-hidden h-[250px] border-[2px] min-w-[330px] max-w-[330px] bg-secondary">
              <img className="h-[190px] w-full" src={category.image} />
              <div className="h-[60px] justify-start flex items-center p-4">
                <span className="text-[18px] tracking-[.05rem] ">
                  {category.name}
                </span>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}

export default CategoryList;
