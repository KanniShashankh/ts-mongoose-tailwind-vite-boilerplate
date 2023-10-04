import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import axios, { AxiosResponse } from 'axios'
import { BASE_PING } from '../Utils/Urls'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState<String>('')
  useEffect(() => {
    async function fetchData() {
      const  { data : { message } } : AxiosResponse<{ message : string, reqlen : number }> = await axios.get(BASE_PING)
      setText(message)
    }
    fetchData()
  }, [])
  return (
    <>
      <h1 className="text-3xl font-bold flex h-screen justify-center">
        Hello world! SO {text}
      </h1>
    </>
  )
}

export default App
