
import { useQuestionsStore } from "./store/questionsStore"
import { App_status } from "./lib/types.d"
import { Init } from "./components/init"
import { Asking } from "./components/Asking"








function App() {

  const APP_STATUS = useQuestionsStore(state => state.App_status)







  return (
    <div className="App w-full h-screen flex flex-col items-center">
      <main className='max-w-4xl h-full mx-auto px-4 py-2 w-full text-balance'>
        {APP_STATUS == App_status.INIT && <Init />}
        {APP_STATUS == App_status.ASKING && <Asking />}




      </main>
    </div>
  )
}









export default App
