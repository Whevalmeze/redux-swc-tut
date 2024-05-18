import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootType } from "../state/store";
import { decrement, increment, incrementAsync, incrementByAmount, } from "../state/counter/counterSlice";

const Counter = () : ReactNode => {
    const count = useSelector((state: RootType) => state.counterReducer.value)
    const dispatch = useDispatch<DispatchType>()
  return (
    <div>
            {count}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(100))}>Increment By 100</button>
        <button onClick={() => dispatch(incrementAsync(100))}>Increment By 100</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter; 