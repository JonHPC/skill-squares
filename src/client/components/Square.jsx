//src/client/components/Square.jsx
import {useState, useEffect} from 'react'

function Square(props) {

    const [skill, setSkill] = useState(props.skill)
    const [isGreen, setIsGreen] = useState(skill.green)
    const [skillId, setSkillId] = useState(skill.id)

    const handleClick = () => {
      props.toggleSquare(skillId)
    }

    return (
      <div onClick={handleClick} className="square w-32 h-32 overflow-auto transition active:scale-95">
        {isGreen ?
          <div className="text-gray-800 flex justify-center items-center bg-emerald-400 h-full w-full transition hover:bg-emerald-300 hover:cursor-pointer active:bg-emerald-400">
            {skill.text}
          </div>
          :
          <div className="flex justify-center items-center bg-gray-700 h-full w-full transition hover:bg-gray-600 hover:cursor-pointer active:bg-gray-700">
            {skill.text}
          </div>
        }
      </div>
    )
  }
  
  export default Square
  