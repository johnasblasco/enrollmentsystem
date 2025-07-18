import AppRoutes from './routes/AppRoutes'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])
  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
