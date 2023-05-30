import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
// Layouts
import SideNavLayout from "./Layouts/SideNavLayout";
// Pages
import HomePage from "./Pages/HomePage";
import AccordionPage from "./Pages/AccordionPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SideNavLayout />}>
      <Route index element={<HomePage />} />
      <Route path="accordion" element={<AccordionPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <div id="top_nav" className="h-[40px] bg-slate-800 text-white">
          Top Nav
        </div>
        <div id="main_container" className="flex flex-row flex-1">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
};

export default App;
