
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPosts } from "../service/userService.jsx"
import { useParams } from "react-router-dom"
import { updatePost } from "../service/userService.jsx"
import { deletePost } from "../service/userService.jsx"



export const PetEdit = () => {
    const { petId } = useParams()
    const [post, setPost] = useState({ title: "", body: "", petPicture: ""})
    const navigate = useNavigate()


    useEffect(() => {
    getAllPosts(parseInt(petId)).then((posts) => {

    setPost(posts)
   })
 }, [petId])
    
    
    const handleSave = (event) => {
        event.preventDefault()
        const updatedPost = {
            id: post.id,
            breedId: post.breedId,
            userId: post.userId,
            title: post.title,
            body: post.body,
            petPicture: post.petPicture
        }
        updatePost(updatedPost)
        navigate(`/adopt`)
    
    }


    const handleDelete = (event) => {
        event.preventDefault()
        deletePost(petId).then(() => {
            navigate("/adopt")
        })
    }

    return (
        <>
            <div>
                <input onChange={(event) => {
                    const postCopy = { ...post }
                    postCopy.title = event.target.value
                    setPost(postCopy)
                }} type="text" value={post.title}/>
                <img  src={post.petPicture} width="150" /> 
                <div>
                    <textarea onChange={(event) => {
                    const postCopy = { ...post }
                    postCopy.body = event.target.value
                    setPost(postCopy)
                }}type="text" value={post.body}/>
                </div>
                <div>
                    <button onClick={(event) => {{handleSave(event)}}}>Save</button>
                </div>
                <div>
                    <button onClick={(event) => {{handleDelete(event)}}}>Delete Post</button>
                </div>
            
            </div>
        </>
    )
}

export default PetEdit

