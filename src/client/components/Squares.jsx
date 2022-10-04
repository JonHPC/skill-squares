//src/client/components/Squares.jsx
import {useState, useEffect} from 'react'
import Square from './Square'

function Squares(props) {

    // const [skills, setSkills] = useState(props.skills)
    // const [display, setDisplay] = useState([])
    // useEffect(() => {
    //     console.log('Squares.jsx re-render')
    //     setSkills(props.skills)
    // })

    // useEffect(() => {
    //     const rows = []
    //     skills.map(el => {
    //         rows.push(<Square toggleSquare={props.toggleSquare} id={el.id} key={el.id} skill={el} />)
    //     })
    //     setDisplay([...rows])
    //     console.log('Squares.jsx useEffect display: ', display)
    // }, [skills, setSkills])

  
    const rows = []
    props.skills.forEach(el => {
        rows.push(<Square toggleSquare={props.toggleSquare} skill={el} key={el.id}/>)
    })


    return (
      <div className="flex flex-wrap justify-center items-center gap-2 bg-gray-900 p-4">
       {rows}
      </div>
    )
  }
  
  export default Squares
  