import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Revise from "./pages/revise"
import Layout from "./components/layout"
import ReviseQuestions from "./pages/revise-questions"
import { ThemeProvider } from "./components/layouts/theme-provider"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      },
      {
        path: '/revise',
        element: <Revise />
      },
      {
        path: '/revise/questions',
        element: <ReviseQuestions />,
      }
    ]
  },

])


function App() {


  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
