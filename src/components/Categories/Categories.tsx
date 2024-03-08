const Categories = () => {
  const categories = [
    {
      category: "Services",
      image: "/images/categories/img-1.png",
    },
    {
      category: "Real Estate",
      image: "/images/categories/img-2.png",
    },
    {
      category: "For Rent",
      image: "/images/categories/img-3.png",
    },
    {
      category: "Items For Sale",
      image: "/images/categories/img-4.png",
    },
    {
      category: "Restaurants",
      image: "/images/categories/img-5.png",
    },
    {
      category: "Jobs",
      image: "/images/categories/img-6.png",
    },
    {
      category: "Events",
      image: "/images/categories/img-7.png",
    },
  ];
  return (
    <section>
      <div className="min-w-[350px] max-w-[540px] md:max-w-[1200px] xl:max-w-[1192px] mx-auto md:p-6 p-4">
        <h1 className="text-center mb-10 font-semibold text-2xl">
          Main Categories
        </h1>
        <ul className="grid grid-cols-4 items-baseline xl:flex md:items-center justify-center gap-7 md:gap-[60px] mb-10">
          {categories.map(({ category, image }) => (
            <li
              key={category}
              className=" flex flex-col justify-center items-center gap-2"
            >
              <div className="rounded-full bg-gray-200 w-20 h-20 md:w-[112px] md:h-[112px] flex items-center justify-center">
                <img src={image} alt="" className="w-5 h-5 md:w-10 md:h-10" />
              </div>
              <p>{category}</p>
            </li>
          ))}
        </ul>
        <img src="/images/hero/hero.jpg" alt="" className="rounded" />
      </div>
    </section>
  );
};

export default Categories;
