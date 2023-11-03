import React, { useContext } from 'react'
import { ExamContext } from "../../context/ExamContextProvider";

export function CartExam(props) {
    const cart = useContext(ExamContext);
    const question = props.question;
    return (
        <div>Question: {question} </div>
    )
}
