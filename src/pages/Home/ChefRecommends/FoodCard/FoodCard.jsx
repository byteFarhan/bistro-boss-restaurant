import { useLocation, useNavigate } from "react-router-dom";
import cardImg from "../../../../assets/home/slide1.jpg";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";

const FoodCard = ({ item, showPrice }) => {
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const { name, recipe, image, price, _id } = item;
  const handleAddToCart = (item) => {
    // console.log(item);
    // console.log(user?.email);
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        price,
        image,
        name,
        email: user?.email,
      };
      axiosSecure
        .post("/cart", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} added to the cart.`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "You have to login your account for adding item to cart!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location }, replace: true });
        }
      });
    }
  };
  return (
    <>
      <div className="w-full overflow-hidden bg-[#F3F3F3] rounded-sm">
        <div className={`${showPrice && "relative"}`}>
          <img
            className="object-cover w-full h-[300px] cursor-pointer transition-transform duration-200 delay-100 ease-in hover:scale-105"
            src={image}
            alt={name}
          />
          {showPrice && (
            <p className="absolute px-2.5 py-1.5 font-semibold text-white bg-title right-3 top-3">
              ${price}
            </p>
          )}
        </div>

        <div className="px-10 py-8 text-center">
          <div className="flex flex-col">
            <h3 className="mb-2 text-2xl font-semibold text-title lg:mb-3">
              {name}
            </h3>
            <div className="flex-grow">
              <p className="text-title">{recipe}</p>
            </div>
          </div>
          <button
            onClick={() => {
              handleAddToCart(item);
            }}
            className="btn-base hover:bg-[#1F2937] border-[#BB8506] bg-[#E8E8E8] text-dark-orange"
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
