import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const DropdownMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const categories = [
    {
      category: "Services",
      image: "/images/categories/img-1.png",
      options: [
        {
          label: "Accounting & Finance",
          subOptions: ["Accounting", "Finance"],
        },
        {
          label: "Admin / Office",
          subOptions: ["Admin", "Office"],
        },
        {
          label: "Arch / Engineering",
          subOptions: ["Arch", "Engineering"],
        },
        {
          label: "Art / Media / Design",
          subOptions: ["Art", "Media", "Design"],
        },
        {
          label: "Biotech / Science",
          subOptions: ["Biotech", "Science"],
        },
      ],
    },
    {
      category: "Real Estate",
      image: "/images/categories/img-2.png",
      options: [
        {
          label: "Accounting & Finance",
          subOptions: ["Accounting", "Finance"],
        },
        {
          label: "Admin / Office",
          subOptions: ["Admin", "Office"],
        },
        {
          label: "Arch / Engineering",
          subOptions: ["Arch", "Engineering"],
        },
        {
          label: "Art / Media / Design",
          subOptions: ["Art", "Media", "Design"],
        },
        {
          label: "Biotech / Science",
          subOptions: ["Biotech", "Science"],
        },
      ],
    },
    {
      category: "For Rent",
      image: "/images/categories/img-3.png",
      options: [
        {
          label: "Accounting & Finance",
          subOptions: ["Accounting", "Finance"],
        },
        {
          label: "Admin / Office",
          subOptions: ["Admin", "Office"],
        },
        {
          label: "Arch / Engineering",
          subOptions: ["Arch", "Engineering"],
        },
        {
          label: "Art / Media / Design",
          subOptions: ["Art", "Media", "Design"],
        },
        {
          label: "Biotech / Science",
          subOptions: ["Biotech", "Science"],
        },
      ],
    },
    {
      category: "Items For Sale",
      image: "/images/categories/img-4.png",
      options: [
        {
          label: "Accounting & Finance",
          subOptions: ["Accounting", "Finance"],
        },
        {
          label: "Admin / Office",
          subOptions: ["Admin", "Office"],
        },
        {
          label: "Arch / Engineering",
          subOptions: ["Arch", "Engineering"],
        },
        {
          label: "Art / Media / Design",
          subOptions: ["Art", "Media", "Design"],
        },
        {
          label: "Biotech / Science",
          subOptions: ["Biotech", "Science"],
        },
      ],
    },

    {
      category: "Jobs",
      image: "/images/categories/img-6.png",
      options: [
        {
          label: "Accounting & Finance",
          subOptions: ["Accounting", "Finance"],
        },
        {
          label: "Admin / Office",
          subOptions: ["Admin", "Office"],
        },
        {
          label: "Arch / Engineering",
          subOptions: ["Arch", "Engineering"],
        },
        {
          label: "Art / Media / Design",
          subOptions: ["Art", "Media", "Design"],
        },
        {
          label: "Biotech / Science",
          subOptions: ["Biotech", "Science"],
        },
      ],
    },
  ];

  return (
    <div className="min-w-[350px] max-w-[540px] md:max-w-[1200px] xl:max-w-[1192px] mx-auto bg-white">
      <ul className="flex flex-col after:content-[''] after:w-[1px] after:h-full after:text-blue-100">
        {categories.map(({ category, image, options }) => (
          <li
            key={category}
            className="flex justify-between items-center w-[295px] px-2 py-3 hover:bg-blue-100 transition cursor-pointer"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => {
              setHoveredCategory(null);
              setHoveredOption(null);
            }}
          >
            <div className="flex gap-4 justify-center items-center">
              <img src={image} alt="category" />
              <p>{category}</p>
            </div>
            <MdOutlineKeyboardArrowRight className="w-[20px] h-[20px]" />

            {hoveredCategory === category && (
              <div className="absolute top-0 left-[82%] ml-2 p-2 border-l-2 bg-white  h-[320px]">
                {options.map(({ label, subOptions }, idx) => (
                  <div
                    className="flex justify-between items-center w-[295px] px-2 py-3 hover:bg-blue-100 transition cursor-pointer"
                    key={idx}
                  >
                    <div
                      className="flex gap-4 justify-center items-center"
                      onMouseEnter={() => setHoveredOption(label)}
                      onMouseLeave={() => setHoveredOption(label)}
                    >
                      <p>{label}</p>
                    </div>
                    <MdOutlineKeyboardArrowRight className="w-[20px] h-[20px]" />

                    {subOptions && hoveredOption === label && (
                      <div className="absolute top-0 left-[95%] ml-2 p-2 border-l-2 bg-white  h-[320px]">
                        {subOptions.map((subOption, idx) => (
                          <div
                            className="flex justify-between items-center w-[295px] px-2 py-3 hover:bg-blue-100 transition cursor-pointer"
                            key={idx}
                          >
                            <div
                              className="flex gap-4 justify-center items-center"
                              onMouseEnter={() => setHoveredOption(label)}
                              onMouseLeave={() => setHoveredOption(label)}
                            >
                              <p key={subOption} className="mb-1">
                                {subOption}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              //   <div className="absolute top-0 left-[82%] ml-2 p-2 bg-white borderrounded-md">
              //     {options.map((option) => (
              //       <div className="min-w-[350px] max-w-[540px] md:max-w-[1200px] xl:max-w-[1192px] mx-auto bg-white flex gap-2">
              //         <p key={option} className="mb-1">
              //           {option}
              //         </p>
              //         <MdOutlineKeyboardArrowRight className="w-[20px] h-[20px]" />
              //       </div>
              //     ))}
              //   </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
