import { Login } from "./components/auth/Login.jsx";
import { Routes, Route } from "react-router";
import { Register } from "./components/auth/Register.jsx";
import { Authorized } from "./components/views/Authorized.jsx";
import { ApplicationViews } from "./components/views/ApplicationViews.jsx";



function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      }
      />
    </Routes>  
  )
}

export default App
