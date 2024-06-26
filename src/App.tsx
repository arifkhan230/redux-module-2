import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex gap-8 border-2 border-purple-300 p-10 rounded-md">
          <button
            onClick={() => dispatch(increment())}
            className="text-white text-xl font-semibold px-3 py-2 rounded-md bg-green-500"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="text-white text-xl font-semibold px-3 py-2 rounded-md bg-green-500"
          >
            Increment By 5
          </button>
          <h1 className="text-3xl font-semibold">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="text-white text-xl font-semibold px-3 py-2 rounded-md bg-red-500"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
