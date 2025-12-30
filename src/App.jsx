import './App.css'
import Head from './component/head'
import Quiz from './component/quiztest'
import Map from './component/map'
import { useState } from 'react'
function App() {
  const [view, setView] = useState(true)
  const autoView = () => setView(true)
  return (
    <div className='w-screen flex items-center flex-col'>
    <Head 
      setView={setView}
      autoView={autoView}
    />
    {(view === true && (<Quiz/>))}
    </div>
  )
}

export default App
