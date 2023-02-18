import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Home from './screens/home.screen'
import Quiz from './screens/quiz.screen'
import ScoreAndRecommendations from './screens/scoreandrecom.screen'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Home />
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
  {
    path: '/score',
    element: <ScoreAndRecommendations />,
  },
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
