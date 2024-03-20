import { useEffect, useState } from "react"
import { getAllPets } from "../service/userService.jsx"
import "../adopt/PetsData.css"

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
        } if (showCats) {
            const catsArray =  allPetsData.filter(pet => pet.breedId === 2)
            setFilteredPets(catsArray)
        } if (showDogs === false && showCats === false) {
            setFilteredPets(allPetsData)
        }
    }, [showDogs, showCats, allPetsData])

    return (
        <div>
            <div>
                <label>Breeds</label>
            <select>
                <option value="golden-retriever">Golden Retriever</option>
                <option value="mix">Mix</option>
                <option value="pitbull">Pitbull</option>
                <option value="boxer">Boxer</option>
                <option value="domestic-shorthair">Domestic ShortHair</option>
                <option value="maine-coon">Maine Coon</option>
                <option value="domestic-longhair">Domestic Longhair</option>
                    
            </select>
            </div>
       
        <div className="pets container">
                <h2> Available Pets</h2>
                <div>
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
                {filteredPets.map(pet => {
                    return (
                        <div className="pet-card" key={pet.id}>
                            <div>Foster Parent:{pet.userId}</div>
                            <img className="pet-picture" alt="profile picture" src={pet.petPicture}></img>
                            <h2 className="card-title">{pet.title}</h2>
                            <p className="pet-bio">{pet.body}</p>
                        </div>
                     
                    )
                })}
            </article>
        </div>
    </div>
    )
}

export default PetsData