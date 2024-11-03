import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-5xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              cumque magni, non dolores veritatis autem repellendus nesciunt
              dolorum possimus rerum facilis nobis vitae reprehenderit.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10dfe4fb-ded2-4156-9c44-88c0e1d86bc3/W+AF1+SHADOW.png"
            alt=""
            width={400}
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-5xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              cumque magni, non dolores veritatis autem repellendus nesciunt
              dolorum possimus rerum facilis nobis vitae reprehenderit.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/05d5a6b7-ec50-4163-9c57-656ae6cc6f97/NIKE+AIR+FORCE+1+JEWEL.png"
            alt=""
            width={400}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
