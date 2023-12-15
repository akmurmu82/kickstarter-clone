import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Arts from "../Pages/Arts";
import ComicsIllustration from "../Pages/Comics&Illustration";
import DesignTech from "../Pages/Design&Tech";
import Film from "../Pages/Film";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home isHomePage={true} />}></Route>
      <Route path="/arts" element={<Arts />}></Route>
      <Route
        path="/comics&illustration"
        element={<ComicsIllustration/>}
      ></Route>
      <Route path="/design&tech" element={<DesignTech/>}></Route>
      <Route path="/film" element={<Film/>}></Route>
      <Route path="/food&craft" element={<h1>Food & Craft</h1>}></Route>
      <Route path="/games" element={<h1>Games</h1>}></Route>
      <Route path="/music" element={<h1>Music</h1>}></Route>
      <Route path="/publishing" element={<h1>Publishing</h1>}></Route>
    </Routes>
  );
}
