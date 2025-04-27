
import { useQuestionsStore } from "./store/questionsStore"
import { App_status } from "./lib/types.d"
import { Init } from "./components/init"
import { Asking } from "./components/Asking"
import { Finish } from "./components/Finish"
import { Toaster } from "sonner"
import { ChooseQuestions } from "./components/chosee-questions"
import { ChooseLevels } from "./components/choose-levels"









function App() {

  const APP_STATUS = useQuestionsStore(state => state.App_status)







  return (
    <div className="App w-full h-screen flex flex-col items-center">

      <Toaster />
      <main className='max-w-4xl h-full mx-auto px-4 py-2 w-full text-balance'>
        {APP_STATUS == App_status.CHOSE_TYPE_QUESTIONS && <ChooseQuestions />}
        {APP_STATUS == App_status.CHOSE_LEVELS && <ChooseLevels />}
        {APP_STATUS == App_status.INIT && <Init />}
        {APP_STATUS == App_status.ASKING && <Asking />}
        {APP_STATUS == App_status.FINISH && <Finish />}
      </main>
    </div>
  )
}









export default App
