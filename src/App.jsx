import { Login } from "./components/auth/Login.jsx";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>  
  )
}

export default App
