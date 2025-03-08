import { FormEvent, RefObject } from "react"
import { Question, StatusEnum } from "../lib/types.d"
import { NextButtons } from "./NextButtons"

interface Props {
    data: Question[],
    LevelQuestion: number
    numberOfQuestions: RefObject<number>,
    setLevelQuestion: (value: number) => void,
    setStatus: (value: StatusEnum) => void


}
export function Questions({ data, LevelQuestion, numberOfQuestions, setLevelQuestion, setStatus }: Props) {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget;


        for (const el of form) {
            const input = el as HTMLInputElement;
            if (input.type === "radio") {
                const correct = input.dataset.correct
                const IsChecked = input.checked
                console.log({ correct, IsChecked, value: input.value, name: input.name })

                if (correct === "true" && IsChecked) {
                    console.log("correcto", { correct, IsChecked, value: input.value, name: input.name })
                    setLevelQuestion(LevelQuestion + 1)
                    setStatus(StatusEnum.Correct)
                    break;
                }

                if (correct === "false" && IsChecked) {
                    console.log("incorrecto", { correct, IsChecked, value: input.value, name: input.name })
                    setStatus(StatusEnum.Incorrect)
                }

            }

        }



    }

    return (
        <>
            {
                data.length > 0 && LevelQuestion < numberOfQuestions.current ? <>
                    <p className={`text-center font-medium text-xl my-4 ${status === StatusEnum.Correct ? 'text-green-500' : status === StatusEnum.Incorrect ? 'text-red-500' : 'text-gray-600'}`}>{status}</p>

                    <form onSubmit={handleSubmit} data-id={data[LevelQuestion].question}>
                        <h1 className='text-4xl font-semibold text-center text-balance sm:text-left'>{data[LevelQuestion].question}</h1>


                        <ol className='p-4 rounded list-decimal flex flex-col items-start'>
                            {
                                data[LevelQuestion].answers.map((answer, idx) => {
                                    return (
                                        <li key={idx} className='text-xl my-2 py-2 px-1'>
                                            <input required type="radio" name={data[LevelQuestion].question} id={answer.respuesta} value={answer.respuesta} data-correct={answer.correct} className='mr-2 cursor-pointer p-2' />
                                            <label className='cursor-pointer p-2' htmlFor={answer.respuesta}>{answer.respuesta}</label>

                                        </li>
                                    )
                                })
                            }
                        </ol>

                        <NextButtons nivel={LevelQuestion} nroPreguntas={numberOfQuestions} />
                    </form>

                </> : <h1 className='text-center text-4xl text-amber-500'>Se acabaron las preguntas, recarga la pagina para obtener más</h1>
            }

        </>
    )

}