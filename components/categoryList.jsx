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
  return (
    <div className="flex gap-4 overflow-x-scroll hide-scrollbar">
      {categoryList.map((category) => (
        <>
          <div className="p-2 pl-8 pr-8 rounded-3xl hover:bg-primary hover:text-white transition-all ease-in-out duration-150 bg-secondary">
            {category}
          </div>
        </>
      ))}
    </div>
  );
}

export default CategoryList;
