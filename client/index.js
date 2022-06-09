import React from "react";
import { createRoot } from "react-dom/client";
export default function App() {
  return <div>Hello Form Node </div>;
}
const Root = createRoot(document.querySelector("#container"));
Root.render(<App />);
