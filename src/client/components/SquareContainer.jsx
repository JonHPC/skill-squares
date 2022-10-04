//src/client/components/SquareContainer.jsx
import {useState, useEffect} from 'react'
import axios from 'axios'
import Squares from './Squares'

function SquareContainer() {

  const [skills, setSkills] = useState([])
  const [areSquares, setAreSquares] = useState(false)

  useEffect(() => {
    console.log('SquareContainer useEffect')
    fetchAllSkills()
  },[])


  const fetchAllSkills = () => {
    axios.get('/skills')
      .then(response => {
        setSkills([...response.data])
        console.log('toggleSquare after GET skills: ', skills)
        response.data ? setAreSquares(true) : setAreSquares(false)
      })
  }

  async function fetchSkill(id){
    const res = await axios.get(`skills/${id}`)
    return res.data
  }

  async function toggleSquare(id){
    
    const skillToToggle = await fetchSkill(id)
    //console.log('toggleSquare skillToToggle: ', skillToToggle)
    const payload = {...skillToToggle, green: !skillToToggle.green}
    axios.patch(`skills/${id}`, payload)
      .then(res => {
        // const data = res.data
        // //console.log('toggleSquare data: ', data)
        // console.log('toggleSquare before map skills: ', skills)
        // let oldSkills = skills
        // let updatedSkills = []
        // oldSkills.forEach(el => {
        //   if(el.id === data.id){
        //     updatedSkills.push(data)
        //   }else{
        //     updatedSkills.push(el)
        //   }
        // })
        // console.log('updatedSkills after map: ', updatedSkills)
        // setSkills([...updatedSkills])
        // //window.location.reload()
        // console.log('toggleSquare after map skills: ', skills)
        fetchAllSkills()
      })
  }
  
  return (
    <div className="square-container flex justify-center items-center bg-gray-900 p-4">
      <Squares toggleSquare={toggleSquare} skills={skills}/>
      {/* {areSquares ? 
      <Squares toggleSquare={toggleSquare} skills={skills}/>
      :
      <h1></h1>
      } */}
    </div>
  )
}
  
export default SquareContainer
  