//src/client/components/SquareContainer.jsx
import {useState, useEffect} from 'react'
import axios from 'axios'
import Square from './Square'

function SquareContainer() {

  const [skills, setSkills] = useState([])

  useEffect(() => {
    fetchAllSkills()
  },[])

  const fetchAllSkills = () => {
    axios.get('/skills')
      .then(response => {
        const rows = []
        response.data.map(el => {
          rows.push(<Square toggleSquare={toggleSquare} id={el.id} key={el.id} skill={el} />)
        })
        console.log('fetchAllSkills rows: ', rows)
        setSkills(rows)
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
        
        fetchAllSkills()
      })
      //Might need to add another child component to pass the array to, that child can then
      //iterate through the array to render the components
  }
  
  return (
    <div className="square-container flex flex-wrap justify-center items-center gap-2 bg-gray-900 p-4">
      {skills}
    </div>
  )
}
  
export default SquareContainer
  