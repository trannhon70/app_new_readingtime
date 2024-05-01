import React from "react";

interface Product {
  title: string;
  discount: string;
}

const products: Product[] = [
  {
    title: "Khóa 5 buổi 1 tuần",
    discount: "Giảm giá 50%",
  },
  {
    title: "Khóa 3 buổi 1 tuần",
    discount: "Giảm giá 30%",
  },
  {
    title: "Khóa 2 buổi 1 tuần",
    discount: "Giảm giá 20%",
  },
];

const getBorderClass = (index: number) =>
  index % 2 === 0
    ? "rounded-tr-[36px] rounded-bl-[36px] border-indigo-500"
    : "rounded-tl-[36px] rounded-br-[36px] border-[#E7665E]";

const getColorClass = (index: number) =>
  index % 2 === 0 ? "text-[#5353AC]" : "text-[#E7665E]";

const BannerProducts = () => {
  return (
    <>
      {products.map((product, index) => (
        <div
          key={product.title}
          className={`flex flex-col gap-4 justify-center my-6 border-4 border-solid p-11 ${getBorderClass(
            index
          )}`}
        >
          <img
            src="https://www.reading-time.co.kr/resources/img/main/logo.png"
            className="object-contain w-[239px] h-[56px]"
            alt="Product"
          />
          <h5 className="text-[#777777] font-bold">{product.title}</h5>
          <span className={`font-bold ${getColorClass(index)}`}>
            {product.discount}
          </span>
          <button
            className={`rounded-[9px] bg-${getColorClass(
              index
            )} bg-[#e7665e] px-[65px] p-4 text-white`}
          >
            Áp dụng
          </button>
        </div>
      ))}
    </>
  );
};

export default BannerProducts;
