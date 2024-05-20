import { useState } from "react";

const Home = () => {
  const [test, setTest] = useState(true);
  return (
    <div onClick={() => setTest(!test)}>
      <h1 className={test ? "text-4xl font-bold" : ""}>Home</h1>
    </div>
  );
};

export default Home;
