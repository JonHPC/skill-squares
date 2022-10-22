//src/client/components/SquareContainer.jsx
import {useState, useEffect} from 'react'
import axios from 'axios'
import Squares from './Squares'

function SquareContainer() {

  const [skills, setSkills] = useState([])
  const [areSquares, setAreSquares] = useState(false)
  const [input, setInput] = useState("")

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

  const handleChange = (e) => {
    //console.log(e.target.value)
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    console.log('handleSubmit')
    const payload = {
      text: input,
      green: false
    }
    if(input){
      axios.post('/skills/add', payload)
      .then((res)=>{
        setInput("")
        const input = document.getElementById('input')
        input.value = ""
        fetchAllSkills()
      })
    }
  }
  
  return (
    <div className="flex-col justify-start items-center h-full pt-8">
      <div className="flex justify-center items-center gap gap-4">
        <input id="input" onChange={handleChange} type="text" placeholder="Type skill here..." className="p-2"></input>
        <button onClick={handleSubmit} className="bg-emerald-400 rounded-none border-0 text-gray-800 transition hover:bg-emerald-300 hover:cursor-pointer active:bg-emerald-400 p-2">Add Square</button>
      </div>
      <div className="square-container flex justify-center items-center bg-gray-900 p-4">
        {areSquares ? 
        <Squares toggleSquare={toggleSquare} skills={skills}/>
        :
        <h1>Add squares</h1>
        }
      </div>
    </div>
  )
}
  
export default SquareContainer
  