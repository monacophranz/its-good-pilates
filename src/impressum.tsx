import "same-runtime";
import { createRoot } from "react-dom/client";
import "./index.css";
import LegalLayout from "./components/LegalLayout";
import { impressum } from "./legal";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(
  <LegalLayout
    title={impressum.title}
    intro={impressum.intro}
    sections={impressum.sections}
  />,
);
