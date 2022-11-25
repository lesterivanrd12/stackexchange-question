import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function Questions() {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'b478a8e07fmsh252dcfffc94d9b2p164b47jsn53d37ecc73c6',
    //         'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    //     }
    // };

    //Model
    const [question, setQuestion] = useState();
    useEffect(() => {
        const url = 'https://the-trivia-api.com/api/questions?categories=history&limit=20&region=PH&difficulty=easy';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setQuestion(data)
                console.log(data[0])
                console.log(data[0].question)
            });
    }, []);

    //View
    return(
        <>
            {question ? (
                <>
                <h1>Here are the question:</h1>
                {question.map((questions) => {
                    return (
                        <p key={uuidv4()}>
                            {questions.question}
                            <br></br>
                            {' Answer: ' + questions.correctAnswer}
                        </p>
                    );
                })}
                </>
            ) : null }
        </>
    );
}