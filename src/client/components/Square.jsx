//src/client/components/Square.jsx

function Square(props) {

    const handleClick = (e) => {
      props.toggleSquare(props.skill._id)
    }

    return (
      <div onClick={handleClick} className="square w-32 h-32 overflow-auto transition active:scale-95">
        {props.skill.green ?
          <div className="text-gray-800 flex justify-center items-center bg-emerald-400 h-full w-full transition hover:bg-emerald-300 hover:cursor-pointer active:bg-emerald-400">
            {props.skill.text}
          </div>
          :
          <div className="flex justify-center items-center bg-gray-700 h-full w-full transition hover:bg-gray-600 hover:cursor-pointer active:bg-gray-700">
            {props.skill.text}
          </div>
        }
      </div>
    )
  }
  
  export default Square
  