import Login from "./login/Login";
import Bar from "./Navbar/bar";
import Register from "./register/Register";
import Settings from "./settings/Settings";
import Single from "./Single/Single";
import Write from "./write/Write";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const user = true;

  return (
    <>

    <Router>
      <Bar/>

    <Routes>


      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={ user ? <Home/> : <Register/>}/>
      <Route path="/login" element={user ? <Home/> : <Login/>}/>
      <Route path="/settings" element={user ? <Settings/>: <Register/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
      <Route path="/write" element={user ? <Write/>: <Register/>}/>


    </Routes>
    
    </Router>

     
     {/* <Bar/> */}

     {/* <Single/> */}

     {/* <Write/> */}

     {/* <Settings/> */}

     {/* <Login/> */}
     

     {/* <Register/> */}
    </>
  );
}

export default App;
