import React from "react";
import { createRoot } from "react-dom/client";
import Counter1 from "./components/counter1";
import Counter2 from "./components/counter2";
import { Provider } from "./react-redux";
import store from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Counter1 />
    <Counter2 />
  </Provider>
);
