//src/client/components/SquareContainer.jsx
import {useState, useEffect} from 'react'
import axios from 'axios'
import Squares from './Squares'

function SquareContainer() {

  const [skills, setSkills] = useState([])
  const [areSquares, setAreSquares] = useState(false)

  useEffect(() => {
    fetchAllSkills()
  },[])


  const fetchAllSkills = () => {
    axios.get('/skills')
      .then(response => {
        setSkills(response.data)
        response.data ? setAreSquares(true) : setAreSquares(false)
      })
  }

  async function fetchSkill(id){
    const res = await axios.get(`skills/${id}`)
    return res.data
  }

  async function toggleSquare(id){
    
    const skillToToggle = await fetchSkill(id)
    console.log('toggleSquare skillToToggle: ', skillToToggle)
    const payload = {...skillToToggle, green: !skillToToggle.green}
    axios.patch(`skills/${id}`, payload)
      .then(res => {
        const data = res.data
        console.log('toggleSquare data: ', data)
        console.log('toggleSquare before map skills: ', skills)
        const updatedSkills = []
        for(let i = 0; i < skills.length; i++){
          if(skills[i].id === data.id){
            updatedSkills.push(data)
          }else{
            updatedSkills.push(skills[i])
          }
        }
        console.log('updatedSkills after map: ', updatedSkills)
        setSkills(updatedSkills)
        updatedSkills ? setAreSquares(true) : setAreSquares(false)
        console.log('toggleSquare after map skills: ', skills)
      })
  }
  
  return (
    <div className="square-container flex justify-center items-center bg-gray-900 p-4">
      {areSquares ? 
      <Squares toggleSquare={toggleSquare} skills={skills}/>
      :
      <h1>Click to add Skill</h1>
      }
    </div>
  )
}
  
export default SquareContainer
  