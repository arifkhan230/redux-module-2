import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex gap-8 border-2 border-purple-300 p-10 rounded-md">
          <button className="text-white text-xl font-semibold px-3 py-2 rounded-md bg-green-500">
            Increment
          </button>
          <h1 className="text-3xl font-semibold">0</h1>
          <button className="text-white text-xl font-semibold px-3 py-2 rounded-md bg-red-500">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
