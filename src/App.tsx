import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services/services";
import NotFound from "./pages/not-found";
import Layout from "./components/layout";
import Service from "./pages/services/service";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />}>
            <Route path=":serviceType" element={<Service />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
