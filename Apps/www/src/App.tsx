import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router"
import {SignIn} from "./Screens/SignIn";
import {SignUp} from "./Screens/SignUp";
import {Landing} from "./Screens/LandingPage";
import {Videopage} from "./Screens/VideoPage";

export function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path ="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/watch" element={<Videopage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
