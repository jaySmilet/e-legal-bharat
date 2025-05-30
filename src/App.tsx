import "./App.scss";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/not-found";
import Layout from "./components/layout";
import Spinners from "./components/Spinners/spinners";

// Lazy load pages
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Services = lazy(() => import("./pages/services/services"));
const Service = lazy(() => import("./pages/services/service"));

function App() {
  return (
    <Suspense fallback={<Spinners />}>
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
    </Suspense>
  );
}

export default App;
