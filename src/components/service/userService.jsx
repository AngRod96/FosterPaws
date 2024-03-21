export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
      res.json()
    )
  }
  
  export const createUser = (user) => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json())
  }
  
export const  getUserProfile = (id) => {
    return fetch(`http://localhost:8088/users?id=${id}`).then((res) => res.json())
}

export const getAllPets = () => {
    return fetch(`http://localhost:8088/pets?_expand=user`).then((response) => response.json())
}


export const getBreed = () => {
  return fetch(`http://localhost:8088/breed`).then((response) => response.json())
}



export const createNewPost = (newPost) => {
  return fetch(`http://localhost:8088/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  })
}

export const getAllPosts = (petId) => {
  return fetch(`http://localhost:8088/pets/${petId}`).then((res) => res.json())
}


export const updatePost = (updatedPost) => {
  return fetch(`http://localhost:8088/pets/${updatedPost.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost)
  })
}



export const deletePost = (postId) => {
  return fetch(`http://localhost:8088/pets/${postId}`, {
    method: "delete"
  })
}