import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  console.log(productDetail);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex gap-x-14">
      <img
        className="w-[350px] h-[500px]  object-contain mt-10"
        src={productDetail?.image}
        alt=""
      />
      <div>
        <div className="text-4xl font-bold mt-28">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-2xl text-red-500">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-2xl text-red-500">
          Count: {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price} <span className="text-sm">₺</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-12 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-5xl  border cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className=" border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
