import React from 'react'

function Container({ children }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-32 lg:px-4">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container