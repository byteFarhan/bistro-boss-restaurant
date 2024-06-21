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
    <section className="w-full min-h-screen bg-[#F6F6F6] flex justify-center items-center">
      <div className="w-3/4 pt-16 mx-auto mb-20">
        <SectionIntro title={"MANAGE ALL ITEMS"} subTitle={"Hurry Up!"} />
        <div className="p-12 mt-24 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold text-title font-cinzel">
              Total Items: {cart?.length}
            </h3>
            <h3 className="text-3xl font-bold text-title font-cinzel">
              Total Price: ${totalPrice}
            </h3>
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
