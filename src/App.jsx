import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./screens/home.screen"
import Quiz from "./screens/quiz.screen"
import ScoreAndRecommendations from "./screens/scoreandrecom.screen"
import store from './store/store'


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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
