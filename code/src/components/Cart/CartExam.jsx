import React, { useContext } from 'react'
import { ExamContext } from "../../context/ExamContextProvider";
import { AiTwotoneDelete } from "react-icons/ai";
export function CartExam(props) {
    const cart = useContext(ExamContext);
    console.log(props)
    const question = props.question.text;
    const option1 = props.question.options1
    const option2 = props.question.options2
    const option3 = props.question.options3
    const option4 = props.question.options4
    const answer = props.question.answer;
    const paralysisQuestion = props.question.paralysisQuestion;

    return (
        <div>
            <div>Question: {question}</div>
            <div>Option 1 : {option1}</div>
            <div>Option 2 : {option2}</div>
            <div>Option 3 : {option3}</div>
            <div>Option 4 : {option4}</div>
            <div>Answer : {answer}</div>
            <div>Is Paralysis Question  : {paralysisQuestion}</div>
            <button className='btn btn-danger'onClick={() => cart.deleteFromCart(question) }>
                <AiTwotoneDelete />
            </button>
            <div>###################</div>
        </div>
    )
}
