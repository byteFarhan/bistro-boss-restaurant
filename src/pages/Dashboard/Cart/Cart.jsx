import useCart from "../../../hooks/useCart";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import CartTable from "./CartTable/CartTable";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => {
    return total + item?.price;
  }, 0);
  //   console.log(cart);
  return (
    <section className="w-full min-h-screen bg-[#F6F6F6] flex justify-center">
      <div className="w-3/4 pt-16 mx-auto mb-20">
        <SectionIntro title={"WANNA ADD MORE?"} subTitle={"My Cart"} />
        <div className="p-12 mt-24 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold text-title font-cinzel">
              Total Items: {cart?.length}
            </h3>
            <h3 className="text-3xl font-bold text-title font-cinzel">
              Total Price: ${totalPrice}
            </h3>
            <button className="px-5 py-2.5 rounded-md bg-orange-400 text-white font-bold font-cinzel text-lg">
              Pay
            </button>
          </div>
          <div className="mt-10">
            <CartTable items={cart} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
