import React from "react";
import { createRoot } from "react-dom/client";
import GHReposShowcase from "./GHReposShowcase";

const container = document.getElementById("root") || new DocumentFragment();
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <GHReposShowcase username="devastion" columns={3} />
  </React.StrictMode>
);
