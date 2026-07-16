import React, { useState } from "react";

const App = () => {
  const [array, setArray] = useState(["Vijay", "Ajith", "Suriya"]);

  const clickArr = () => {
    const changeHero = [...array];
    changeHero[1] = "SK";
    setArray(changeHero);
  };

  const [object, setObject] = useState({
    name: "Harish",
    cource: "js",
  });

  const clickobj = () => {
    setObject({ ...object, cource: "React" });
  };

  const [dry, setDry] = useState(["Apple", "Orange", "Mango"]);

  const fruit = () => {
    const change = [...dry];
    change[1] = "Banana";
    setDry(change);
  };

  const [at, setAt] = useState({
    company: "Google",
    city: "Chennai",
  });

  const are = () => {
    setAt({ ...at, company: "MICROSOFT" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">

        {/* Task 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Task 1 - Change Hero
          </h2>

          <p className="text-lg font-medium mb-4">{array.join(" ")}</p>

          <button
            onClick={clickArr}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Change Hero
          </button>
        </div>

        {/* Task 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Task 2 - Change Fruit
          </h2>

          <p className="text-lg font-medium mb-4">{dry.join(" ")}</p>

          <button
            onClick={fruit}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update Fruit
          </button>
        </div>

        {/* Task 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Task 3 - Update Course
          </h2>

          <p className="text-lg">
            <span className="font-semibold">Name:</span> {object.name}
          </p>

          <p className="text-lg mb-4">
            <span className="font-semibold">Course:</span> {object.cource}
          </p>

          <button
            onClick={clickobj}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Update Course
          </button>
        </div>

        {/* Task 4 */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Task 4 - Update Company
          </h2>

          <p className="text-lg">
            <span className="font-semibold">Company:</span> {at.company}
          </p>

          <p className="text-lg mb-4">
            <span className="font-semibold">City:</span> {at.city}
          </p>

          <button
            onClick={are}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Update Company
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;