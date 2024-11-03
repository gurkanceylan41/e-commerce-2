import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((store) => store.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Sepetiniz</h1>

      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp cart={cart} key={i} />
          ))}
          <div className="flex items-center justify-end text-2xl ">
            TOPLAM TUTAR:{" "}
            <span className="font-bold text-3xl ml-2">
              {totalAmount.toFixed(2)} ₺
            </span>
          </div>
        </div>
      ) : (
        <div>Kartınız boş...</div>
      )}
    </div>
  );
};

export default Cart;
