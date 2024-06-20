import { BallTriangle } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (user) {
    return children;
  } else if (loading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivetRoute;
