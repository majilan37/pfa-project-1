import { useEffect, useRef } from "react";

export function currencyFormat(n: number) {
  const formatter = new Intl.NumberFormat(undefined, {
    currency: "MAD",
    style: "currency",
  });

  return formatter.format(n);
}

export function simulateReaquest(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// export function useDidMountEffect(func: () => void, deps: any[]) {
//   const didMount = useRef(false);

//   useEffect(() => {
//     if (didMount.current) func();
//     else didMount.current = true;
//   }, deps);
// }
