import { useEffect, useState } from "react"
import { createNewPost } from "../service/userService.jsx"
import { useNavigate } from "react-router-dom"
import { getBreed } from "../service/userService.jsx"



export const NewPostForm = ({ currentUser }) => {
    const [post, setPost] = useState({
        breedId: 0,
        userId: 0,
        title: "",
        body: "",
        petPicture: ""

    })

    const [breed, setBreed] = useState([])

    useEffect(() => {
        getBreed().then((breeds) => {setBreed(breeds)})
    }, [])

    const navigate = useNavigate()

    const handlePostChanges = (event) => {
        const postCopy = { ...post }
        postCopy[event.target.name] = event.target.value
        setPost(postCopy)
    }

    const handleSave = (event) => {
        event.preventDefault()

        if (post.body) {
            const newPost = {
                breedId: post.breedId,
                userId: post.userId,
                title: post.title,
                body: post.body,
                petPicture: post.petPicture
                
            }

            createNewPost(newPost).then(() => {
                navigate('/adopt')
            })
        }
    }
    return (
        <form>
            <h2>Add New Pet</h2>
            <fieldset>
                <input type="text" placeholder="pet name" name="title" onChange={handlePostChanges}/>
            </fieldset>
            <fieldset>
                <div className="choices">
                    <label>Male
                        <input value="male" type="radio"
                            onChange={handlePostChanges}
                        />
                    </label>
                    <label>Female
                        < input value="female" type="radio"
                            onChange={handlePostChanges}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <div className="breed-dropdown">
                        <select name="breedId" onChange={handlePostChanges}>
                            <option value="0" disabled selected >Choose One</option>
                                {breed.map((breedObj) => {
                                    return (
                                        <>
                                            <option value={breedObj.id} key={breedObj.id}>
                                            {breedObj.name}
                                        </option>
                                        </>
                                    )
                                })}
                        
                    </select>
                </div>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <input type="text" placeholder="add pet picture" name="petPicture" onChange={handlePostChanges}></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="bio-box">
                    <label>Description</label>
                        <textarea
                            placeholder="Enter brief description of pet"
                            rows={20}
                            cols={40}
                            onChange={handlePostChanges}
                            name="body">
                        </textarea>
                 </div>
            </fieldset>
            <fieldset>
            <div>
                    <button type="button" className="save-btn" onClick={() => {
                        handleSave()
                }}>Save Post</button>
            </div>
            </fieldset>
        </form>


    )
}

export default NewPostForm