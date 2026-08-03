import "same-runtime";
import { createRoot } from "react-dom/client";
import "./index.css";
import LegalLayout from "./components/LegalLayout";
import { datenschutz } from "./legal";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(
  <LegalLayout
    title={datenschutz.title}
    intro={datenschutz.intro}
    sections={datenschutz.sections}
  />,
);
