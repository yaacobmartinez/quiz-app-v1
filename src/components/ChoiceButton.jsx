import React from 'react'

function ChoiceButton({index, onClick, choice}) {
  return (
    <div className="w-full">
        <button onClick={() => onClick(choice)} 
            className="transition ease-in-out delay-150 w-full sm:w-80 my-2 font-medium rounded-md bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 px-4 py-3 border-2 border-teal-500 hover:text-white hover:shadow-xl transition-all duration-500">
            {index + 1}. {choice}
        </button>
    </div>
  )
}

export default ChoiceButton