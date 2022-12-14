//src/client/components/Squares.jsx
import Square from './Square'

function Squares(props) {
  
    const rows = []
    props.skills.forEach(el => {
        rows.push(<Square toggleSquare={props.toggleSquare} deleteSquare={props.deleteSquare} skill={el} key={el._id} editing={props.editing}/>)
    })

    return (
      <div className="flex flex-wrap justify-center items-center gap-2 bg-gray-900 p-4">
       {rows}
      </div>
    )
  }
  
  export default Squares
  