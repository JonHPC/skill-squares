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
        setSkills([...response.data])
        //console.log('toggleSquare after GET skills: ', skills)
        response.data.length ? setAreSquares(true) : setAreSquares(false)
      })
  }

  async function fetchSkill(_id){
    const res = await axios.post(`skills`, {_id})
    return res.data
  }

  async function toggleSquare(id){
    const skillToToggle = await fetchSkill(id)
    const payload = {...skillToToggle, green: !skillToToggle.green}
    //console.log('SquareContainer payload: ', payload)
    axios.patch(`skills`, payload)
      .then(res => {
        fetchAllSkills()
      })
  }
  
  return (
    <div className="square-container flex justify-center items-center bg-gray-900 p-4">
      {areSquares ? 
      <Squares toggleSquare={toggleSquare} skills={skills}/>
      :
      <h1>Add squares</h1>
      }
    </div>
  )
}
  
export default SquareContainer
  