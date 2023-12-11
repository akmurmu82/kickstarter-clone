import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Arts from "../Pages/Arts";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home isHomePage={true}/>}></Route>
      <Route path="/arts" element={<Arts/>}></Route>
      <Route path="/comics&illustration" element={<h1>Comics & Illustration</h1>}></Route>
      <Route path="/design&tech" element={<h1>Design & Tech</h1>}></Route>
      <Route path="/film" element={<h1>Film</h1>}></Route>
      <Route path="/food&craft" element={<h1>Food & Craft</h1>}></Route>
      <Route path="/games" element={<h1>Games</h1>}></Route>
      <Route path="/music" element={<h1>Music</h1>}></Route>
      <Route path="/publishing" element={<h1>Publishing</h1>}></Route>
    </Routes>
  );
}
