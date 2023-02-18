import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-32 lg:px-4">
                <div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray sm:text-4xl">
                            Our Short English Quiz.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-400">
                            This English quiz estimates your level in just 5 minutes.
                            <br />
                            No fees. No sign ups. Start now.
                            <br />
                            Get recommendations from your quiz results.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link to="/quiz">
                                <button
                                    href="#"
                                    className="rounded-md bg-cyan-500 hover:bg-cyan-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Get started <span aria-hidden="true">→</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home