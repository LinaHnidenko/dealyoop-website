import { FaRegHeart } from "react-icons/fa";
import StarRating from "../Rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectOffers,
} from "../../redux/selectors";
import { useEffect, useState } from "react";
import { getOffers } from "../../redux/operations";
import { Oval } from "react-loader-spinner";

const Offers = () => {
  const [isRowLayout, setIsRowLayout] = useState(false);

  const offers = useSelector(selectOffers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  const toggleLayout = () => {
    setIsRowLayout(!isRowLayout);
  };

  return (
    <section className="mb-12">
      <div className="min-w-[350px] max-w-[540px] md:max-w-[1200px] xl:max-w-[1192px] mx-auto md:p-6 p-4">
        {error && (
          <p className="text-center text-red-600 text-semibold">
            Something went wrong, please try again later
          </p>
        )}
        {isLoading && (
          <div className="flex justify-center items-center">
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#131313"
              ariaLabel="oval-loading"
            />
          </div>
        )}
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-[22px]">All offers</h2>
          <button
            className="bg-blue-950 text-white text-[16px] px-4 py-2 rounded-md hover:text-black focus:text-black0 hover:bg-blue-200 focus:bg-blue-200 transition-all cursor-pointer"
            onClick={toggleLayout}
          >
            {isRowLayout ? "Row" : "Column"}
          </button>
        </div>
        <ul
          className={`grid ${
            isRowLayout ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3"
          } gap-2`}
        >
          {offers?.map(({ id, title, rating, category }) => {
            return (
              <li
                key={id}
                className={`${
                  isRowLayout
                    ? "flex-col md:flex-row md:justify-between items-center"
                    : "flex-col gap-2"
                } border border-borderColor rounded-md overflow-hidden flex`}
              >
                <img src="/images/offers/offer.jpg" alt="offer" />
                <div
                  className={`${
                    isRowLayout ? "" : ""
                  } px-3 py-2 flex flex-col gap-2`}
                >
                  <div className="flex justify-between">
                    <p className="text-[13px]">{category.title}</p>

                    <StarRating rate={rating} />
                  </div>

                  <h3 className="font-bold">{title}</h3>
                  <p className="block w-full">
                    Tax & Financial Associates offers affordable Tax Planning &
                    Tax Preparation services.
                  </p>

                  <div className="flex justify-between">
                    <div className="hidden md:flex justify-center items-center text-[11px] bg-gray-300 rounded-md px-2">
                      Investing
                    </div>
                    <FaRegHeart className="ml-auto hover:fill-red-600 focus:fill-red-600 transition">
                      icon
                    </FaRegHeart>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Offers;
