import type { FC } from "react";
import React from "react";

import Banner from "../../components/Banner";
import HeaderArticle from "../../components/HeaderArticle";
import BannerProducts from "../../components/BannerProducts";
import "./Welcome.css";
interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  return (
    <>
      <div className="px-[10%] py-12 text-center welcome-container bg-[white] ">
        <Banner />
        <button className="px-[63px] bg-[#e7665e] rounded-[9px] mt-8 mb-8 p-4 text-white">
          Đăng ký học thử ngay
        </button>
        <div className="mt-[70px]">
          <HeaderArticle>
            <h3 className="text-[#5353AC] font-bold text-2xl mb-6">
              Reading Time
            </h3>
            <p className="text-sm">
              Thời gian đọc là 25 phút mỗi ngày, khoảng thời gian mà bạn có thể
              hình thành thói quen đọc tiếng Anh và phát triển kỹ năng tiếng Anh
              của mình một cách tự nhiên dưới sự hướng dẫn của giáo viên nước
              ngoài.
            </p>
          </HeaderArticle>
        </div>
        <BannerProducts />
      </div>
      <div className="welcome-section-why">
        <div className="px-[10%] py-12 text-center">
          <HeaderArticle>
            <h3 className="text-[#5353AC] font-bold text-2xl mb-6">
              Tạo thói quen đọc tiếng Anh! 25 phút mỗi ngày, thời gian đọc sách!
            </h3>
            <p className="text-sm">
              Reading Time phát triển thói quen đọc tiếng Anh thông qua sự hướng
              dẫn đọc hàng ngày của giáo viên nước ngoài. Cuộc trò chuyện với
              người bản xứ trở nên tự nhiên hơn như một phần thưởng!
            </p>
          </HeaderArticle>

          <div className="flex flex-row flex-wrap items-center justify-center mt-14 gap-12">
            <div className="module cap rounded-full">
              <p>Huấn luyện 1:1 cùng giáo viên nước ngoài</p>
            </div>

            <div className="module cap rounded-full">
              <p>
                25 phút <br />
                 mỗi ngày
              </p>
            </div>

            <div className="module cap rounded-full">
              <p>Học trực tuyến</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
