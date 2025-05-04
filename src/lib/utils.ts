import { biologyArray } from "./biology-questions";
import { scienceArray } from "./science-questions";
import { GeoArray } from "./geo-questions";
import { historyArray } from "./history-questions";

import { shuffleAnswers } from "./shuffleAnswers";








export const totalQuestions = [...GeoArray,...historyArray, ...scienceArray, ...biologyArray];


// shuffle the answers of the total questions array
export const newTotalQuestions = totalQuestions.map((question) => {
    const newQuestion = shuffleAnswers({question})
    
    return newQuestion
})





