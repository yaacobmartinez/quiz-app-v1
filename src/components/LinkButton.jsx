import React from 'react'
import { Link } from 'react-router-dom'

function LinkButton({children, to}) {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
        <Link to={to}>
            <button
                href="#"
                className="rounded-md bg-cyan-500 hover:bg-cyan-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                {children}
            </button>
        </Link>
    </div>
  )
}

export default LinkButton