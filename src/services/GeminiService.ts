import { GoogleGenerativeAI } from "@google/generative-ai";
import {auxQuestions} from "../lib/utils.d"

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
console.log(apiKey);

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


const prompt =
  "Ayudame a generar preguntas de cultura general, tu tarea es devolver un objeto json con un array contenido en un propiedad data  el array debe ser de objetos json con la pregunta y las respuestas, deben ser 4 respuestas, una correcta y tres incorrectas, el array de respuestas debe ser un array de objetos json con la respuesta, y la opción correcta contenido en un atributo 'correct' que debe ser true o false. la respuesta final debe ser un array con los objetos json con las preguntas y las respuestas. La respuesta debe estar en un json válido y debe parecerce a esto: {data: [{question: 'que es el sol?', answers: [{respuesta: 'estrella', correct: false}, {respuesta: 'astro', correct: true}, {respuesta: 'planeta', correct: false}, {respuesta: 'agujero negro', correct: false}]}]}. Importante: responde con el json envuelto en comillas dobles no con `` y no coloques ninguna letra fuera de las propiedas correspondientes, no coloques ```json. No respondas con ningún otro texto. el array de data debe tener 100 objetos con las preguntas, no coloques preguntas tampoco tan básicas o muy repetitivas, ve aumentando la dificultad, incluye tambien preguntas sobre tambien de ciencia,Capitales de paises no tan fáciles o comunes y puedes preguntar cual es la capital de sudafrica, cual es la religiosa,economica,etc,historia,medicina,politica,NO arte, matematicas,y no cual es la capital de australia . Trata de que cada pregunta sea mas dificil, es decir que vaya aumentando la dificultad, y no envies datos que ya hayas respondido antes.";

export async function Ask() {
  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return JSON.parse(result.response.text());
  } catch (error) {
    console.log("ha ocurrido el error ", error);
    return JSON.stringify(auxQuestions);
  }
}

// {
//   data: [
//     {
//       question: "que es el sol?",
//       answers: [
//         { respuesta: "estrella", correct: false },
//         { respuesta: "astro", correct: true },
//         { respuesta: "planeta", correct: false },
//         { respuesta: "agujero negro", correct: false },
//       ],
//     },
//   ];
// }

