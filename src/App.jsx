import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Error from "./Error";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
        <Route path="/error" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}
