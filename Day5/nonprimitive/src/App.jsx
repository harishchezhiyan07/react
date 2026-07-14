
const App = () => {
  // Array of Objects
  const students = [
    {
      id: 1,
      name: "Harish",
      course: "React",
      city: "Chennai",
    },
    {
      id: 2,
      name: "Harini",
      course: "JavaScript",
      city: "Bangalore",
    },
    {
      id: 3,
      name: "kruthika",
      course: "HTML & CSS",
      city: "Hyderabad",
    },
    {
      id: 4,
      name: "abi",
      course: "Tailwind CSS",
      city: "Mumbai",
    },
  ];

  return (
    <>
   
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Student List
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                {student.name}
              </h2>

              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Course:</span>{" "}
                {student.course}
              </p>

              <p className="text-gray-600">
                <span className="font-semibold">City:</span>{" "}
                {student.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>);
};

export default App;

