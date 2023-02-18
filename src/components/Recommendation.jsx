import React from 'react'

function Recommendation({course}) {
  return (
    <div className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
            src={course.image}
            alt={course.name}
            className="h-full w-full object-cover object-center"
        />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
        <a className="text-gray-500" href="#">
            <span className="absolute inset-0" />
            {course.subtext}
        </a>
        </h3>
        <p className="text-base font-semibold text-gray-900">{course.name}</p>
    </div>
  )
}

export default Recommendation