import { Login } from "./components/auth/Login.jsx";
import { Routes, Route } from "react-router";
import { Welcome } from "./components/welcome/Welcome.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route index element={<Welcome /> } />
    </Routes>  
  )
}

export default App
