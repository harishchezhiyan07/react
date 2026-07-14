import React from "react";

const Home = ({ Data }) => {
    console.log(Data);
    
  return (
    <>
      <div className="bg-amber-300 min-h-screen flex justify-center items-center gap-10 flex-wrap">
        {Data.map((elem) => (
          <div
            key={elem}
            className="text-white font-bold bg-blue-800 p-10 rounded-lg"
          >
            <h2>{elem}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;