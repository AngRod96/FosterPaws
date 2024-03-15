import { Routes, Outlet, Route } from "react-router";
import { Welcome } from "../welcome/Welcome.jsx";
import { NavBar } from "../nav/NavBar.jsx";
import { useState, useEffect } from "react";
import ProfileData from "../Profile/ProfileData.jsx";
import { AdoptData } from "../adopt/AdoptData.jsx";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
      const profileUser = localStorage.getItem("fosterpaws_user")
      const profileUserObject = JSON.parse(profileUser)
  
      setCurrentUser(profileUserObject)
    }, [])
  
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="profile">
          <Route index element={<ProfileData currentUser={currentUser} />} /> 
        </Route>
        <Route path="adopt" element={<AdoptData />} />
      </Route>
    </Routes>  
  )
}

export default ApplicationViews
