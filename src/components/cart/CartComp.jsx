import { useState } from "react";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const [quantity, setQuantity] = useState(cart.quantity || 1);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <div className="border rounded-lg shadow-lg p-4 flex justify-between items-center bg-white hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center">
          <img
            src={cart.image}
            alt={cart.title}
            className="w-32 h-32 object-contain rounded-lg mr-4 shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {cart.title}
            </h2>
            <p className="text-lg text-gray-600">Fiyat: {cart.price} ₺</p>
            <p className="text-lg text-gray-600">Miktar: {cart.quantity}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(removeFromCart(cart?.id))}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
