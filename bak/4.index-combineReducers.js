import React from "react";
import { createRoot } from "react-dom/client";
import Counter1 from "./components/counter1";
import Counter2 from "./components/counter2";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Counter1 />
    <Counter2 />
  </>
);
