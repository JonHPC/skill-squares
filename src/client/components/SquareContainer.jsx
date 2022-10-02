//src/client/components/SquareContainer.jsx
import {useState, useEffect} from 'react'
import axios from 'axios'
import Square from './Square'

function SquareContainer() {

  const [skills, setSkills] = useState([])
  
  useEffect(() => {
    axios.get('/skills')
      .then(response => {
        const rows = []
        response.data.map(el => {
          rows.push(<Square key={el.id} id={el.id} skill={el} />)
        })
        setSkills(rows)
      })
  }, [])

  return (
    <div className="square-container flex flex-wrap justify-center items-center gap-2 bg-gray-900 p-4">
      {skills}
    </div>
  )
}
  
export default SquareContainer
  