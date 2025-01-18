import { PropsWithChildren, useState } from "react";

export interface CounterButtonFunctionProps {
  title?: string;
  startCount?: number;
}

export default function CounterButtonFunction(
  props: PropsWithChildren<CounterButtonFunctionProps>
) {
  const [count, setCount] = useState(props.startCount ?? 0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {props.title ?? "count is"} {count}
    </button>
  );
}
