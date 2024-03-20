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
    return fetch(`http://localhost:8088/pets`).then((response) => response.json())
}


export const getBreed = () => {
  return fetch(`http://localhost:8088/breed`).then((response) => response.json())
}
export const createNewPost = (post) => {
  return fetch(`http://localhost:8088/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
}