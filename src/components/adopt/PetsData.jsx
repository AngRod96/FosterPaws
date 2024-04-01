import { useEffect, useState } from "react"
import { getAllPets } from "../service/userService.jsx"
import "../adopt/PetsData.css"
import { Link } from "react-router-dom"

export const PetsData = () => {
    const [allPetsData, setAllPetsData] = useState([])
    const [showDogs, setShowDogs] = useState(false)
    const [showCats, setShowCats] = useState(false)
    const [filteredPets, setFilteredPets] = useState([])
   

    useEffect(() => {
        getAllPets().then((petsArray) => {
            setAllPetsData(petsArray)
        })
    }, [])

    useEffect(() => {
        if (showDogs) {
            const dogsArray = allPetsData.filter(pet => pet.breedId === 1)
            setFilteredPets(dogsArray)
        }
        if (showCats) {
            const catsArray = allPetsData.filter(pet => pet.breedId === 2)
            setFilteredPets(catsArray)
        }
        if (showDogs === false && showCats === false) {
            setFilteredPets(allPetsData)
        }
    }, [showDogs, showCats, allPetsData])

    return (
    <div>
        <div className="container">
                <h2 className="header"> Available Pets</h2>
                <div className="pets-buton">
                    <button className="dog-button" onClick={() => {
                        setShowDogs(true)
                        setShowCats(false)
                    }}> Dogs</button>
                    <button className="cat-button" onClick={() => {
                        setShowCats(true)
                        setShowDogs(false)
                    }}> Cats</button>
                </div>
            <article className="pets">
                {filteredPets?.map(pet => {
                    return (
                        <div className="cards">
                        <div className="app">
                        <div className="animal-card"  key={pet.id}>
                            <img className="card-image" alt="profile picture" src={pet.petPicture}></img>
                            <h2  className="card">{pet.title} </h2>  
                            <p className="card"><Link  className="pet-link" to={`/adopt/${pet.id}`}>{pet.body}</Link></p>
                                <div className="foster">Foster Parent:
                                    <div className="foster">{pet?.user?.fullName}</div>
                                </div>
                        </div>
                        </div>
                        </div>
                     
                    )
                })}
            </article>
            
        </div>
    </div>
    )
}

export default PetsData