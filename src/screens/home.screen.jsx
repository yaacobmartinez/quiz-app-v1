import React from 'react'
import Container from "../components/Container"
import LinkButton from '../components/LinkButton'

function Home() {
    return (
        <Container>
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
                <LinkButton to="/quiz">
                    Get started <span aria-hidden="true">→</span>
                </LinkButton>
            </div>
        </Container>
    )
}

export default Home