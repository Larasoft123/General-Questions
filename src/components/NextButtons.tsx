import { RefObject } from "react";

export function NextButtons({ nivel, nroPreguntas }: { nivel: number, nroPreguntas: RefObject<number> }) {

    return (
        <>

            <div className='p-2 mt-4'>
                {nivel < nroPreguntas.current-1 ?

                    <button type='submit' className='bg-slate-700 hover:bg-slate-600 text-white px-5 py-2.5 rounded-2xl'>Next</button>

                    : <button className='bg-green-700 hover:saturate-150 text-white px-4 py-2 rounded-2xl'>Finish</button>}

            </div>



        </>
    )

}