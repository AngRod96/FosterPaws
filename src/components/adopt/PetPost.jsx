import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {  getAllPosts } from "../service/userService.jsx"
import { useParams } from "react-router-dom"




export const PetPost = ({currentUser}) => {
    const { petId } = useParams()
    const [post, setPost] = useState({ title: "", body: "", petPicture: "" })
    const navigate = useNavigate()

 useEffect(() => {
    getAllPosts(parseInt(petId)).then((posts) => {

    setPost(posts)
   })
 }, [petId])
    
    
 const handleEdit = (event) => {
    event.preventDefault()
    navigate(`/adopt/${petId}/edit`)
}   




    return (
            <div>
                    <h1>{post.title}</h1>
                    <img  src={post.petPicture} width="150" /> 
                    <div>{post.body}</div>
            
            {currentUser?.id === post.userId ? (
                    <div>
                    <button onClick={(event) => { handleEdit(event) }}>Edit</button>
                    </div>
                ) : ("") }
            </div> 
            
    )
}


export default PetPost



