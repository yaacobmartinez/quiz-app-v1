import React from 'react'

function Quiz() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-32 lg:px-4">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <p className="mt-6 text-lg leading-8 text-gray-400">
                    1. Question 1
                </p>
                <div className="w-full">
                    <button
                        className="transition ease-in-out delay-150 w-full sm:w-80 my-2 font-medium rounded-md bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 px-4 py-3 border-2 border-teal-500 hover:text-white hover:shadow-xl transition-all duration-500">
                        Test Choice
                    </button>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Quiz