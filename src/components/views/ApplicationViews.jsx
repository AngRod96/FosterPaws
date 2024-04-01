import { Routes, Outlet, Route } from "react-router";
import { Welcome } from "../welcome/Welcome.jsx";
import { NavBar } from "../nav/NavBar.jsx";
import { useState, useEffect } from "react";
import ProfileData from "../Profile/ProfileData.jsx";
import PetsData from "../adopt/PetsData.jsx";
import NewPostForm from "../post/newPostForm.jsx";
import { PetPost } from "../adopt/PetPost.jsx";
import PetEdit from "../adopt/PetEdit.jsx";
import Images from "../welcome/Welcome.jsx";



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
        <Route path="newPost"> 
            <Route index element={<NewPostForm currentUser={currentUser} />} />
        </Route>
        <Route index element={<><Welcome /><Images  /></>} />
        <Route path="profile">
          <Route index element={<ProfileData currentUser={currentUser} />} /> 
        </Route>
        <Route path="adopt">
          <Route index element={<PetsData />} />
          <Route path=":petId" >
            <Route index element={<PetPost currentUser={currentUser} />} />
            <Route path="edit" element={<PetEdit />} />
          </Route>
        </Route >
      </Route>
    </Routes>  
  )
}

export default ApplicationViews

