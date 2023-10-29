import React, { useContext } from 'react'
import { QuestionContext } from "../../context/CartContextProvider";
import { Button } from "react-bootstrap/";
function CartQuestionBank(props) {
    const cart = useContext(QuestionContext);
    const question = props.question.question;
    const option1 = props.question.option1;
    const option2 = props.question.option2;
    const option3 = props.question.option3;
    const option4 = props.question.option4;
    const licensetype = props.question.license;
    const isparalysis = props.question.license;
    return (
        <>
            <h3>Question: {question}</h3>
            <p>Option1: {option1}</p>
            <p>Option2: {option2}</p>
            <p>Option3: {option3}</p>
            <p>Option4: {option4}</p>
            <p>LicenseType: {licensetype}</p>
            <p>Paralysis: {isparalysis}</p>
            <Button size='sm' onClick={() => cart.deleteFromCart({ question })}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartQuestionBank