import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BookingContextProvider } from "./context/BookingDetailcontext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BookingContextProvider>
    <App />
  </BookingContextProvider>
);
