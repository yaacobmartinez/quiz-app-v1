import React from 'react'
import { Link } from 'react-router-dom'

function ScoreAndRecommendations() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-32 lg:px-4">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            
            <div className="mx-auto max-w-xxl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <p className="mt-6 text-lg leading-8 text-teal-800">
                    Yay! You got a score of 1.
                </p>
                <h2 className="text-2xl font-bold text-gray-900">Recommendations</h2>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                    <div className="group relative">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <img
                            src={`https://images.ctfassets.net/dzoh37iwqged/3v6nY65prU95e83gL2iypt/3fe1d42ed3033c988143a8c2577cd77d/B2_First_-_MockUp.png?fm=webp`}
                            alt={`B2 First`}
                            className="h-full w-full object-cover object-center"
                        />
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500">
                        <a className="text-gray-500" href="#">
                            <span className="absolute inset-0" />
                            {`18 months of access - No monthly charges`}
                        </a>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">{`B2 First`}</p>
                    </div>
                </div>
                <Link to="/">
                    <button
                        href="#"
                        className="rounded-md bg-cyan-500 hover:bg-cyan-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                    <span aria-hidden="true">←</span> Take the exam again 
                    </button>
                </Link>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default ScoreAndRecommendations