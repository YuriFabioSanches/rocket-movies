import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { NewNote } from "../pages/NewNote";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}