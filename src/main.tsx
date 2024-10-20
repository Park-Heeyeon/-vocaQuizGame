import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import ModalProvider from "./components/modal/ModalProvider.tsx";

async function enableMocking() {
  if (!import.meta.env.DEV) return;

  const { worker } = await import("./mocks/browser.ts");

  return worker.start();
}

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element");

enableMocking().then(() => {
  createRoot(rootElement).render(
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ModalProvider />
    </RecoilRoot>
  );
});
