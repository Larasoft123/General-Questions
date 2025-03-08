
import { useEffect, useRef, useState } from 'react'
import { Ask } from './services/GeminiService'

import { Loading } from './components/Loading'
import { Question, StatusEnum } from "./lib/types.d"
import { Questions } from './components/Questions'







function App() {
  const [data, setData] = useState<Question[]>([])
  const [LevelQuestion, setLevelQuestion] = useState(0)
  const numberOfQuestions = useRef(0)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.None)
  const [isAux, setIsAux] = useState(false)


  async function GetData() {
    Ask().then((res) => {
      try {
        // Elimina posibles caracteres adicionales
        const parsedData = JSON.parse(res)
        setIsAux(parsedData.isAux ?? false)
        setData(parsedData.data)
        numberOfQuestions.current = parsedData.data.length
        setLoading(false)
      } catch (err) {
        console.log("error al parsear el json" + err)
      }
    })
  }

  

  useEffect(() => {
    GetData()
  }, [])





  return (
    <div className="App w-full h-screen flex flex-col items-center">
      <main className='max-w-4xl mx-auto px-4 py-2 w-full text-balance'>
        <h1 className='text-4xl mt-10 text-center'>How much do you know about general culture?</h1>
        <p className={`text-center font-medium text-xl my-4 ${status === StatusEnum.Correct ? 'text-green-500' : status === StatusEnum.Incorrect ? 'text-red-500' : 'text-gray-600'}`}>{status}</p>
        <h3 className={`${!isAux ? 'hidden' : ''} text-center text-amber-500 text-xl my-4`}>Using aux questions</h3>

        {!loading
          ?
          <section className={`${data.length < 1 ? 'hidden' : ''} flex list-none flex-col border-2 border-black rounded-lg p-4`}>
            <Questions LevelQuestion={LevelQuestion} data={data} numberOfQuestions={numberOfQuestions} setLevelQuestion={setLevelQuestion} setStatus={setStatus} />
          </section>
          :
          <Loading />
        }





      </main>
    </div>
  )
}









export default App
