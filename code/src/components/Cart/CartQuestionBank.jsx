import React, { useContext } from 'react'
import { QuestionContext } from "../../context/CartContextProvider";
import { Button } from "react-bootstrap/";
function CartQuestionBank(props) {
    const cart = useContext(QuestionContext);
    const question = props.question.text;
    const option1 = props.question.Options1;
    const option2 = props.question.Options2;
    const option3 = props.question.Options3;
    const option4 = props.question.Options4;
    const licensetype = props.question.licenseTypeId;
    const isparalysis = props.question.paralysisQuestion;
    return (
        <>
            <h3>Question: {question}</h3>
            <p>Option1: {option1}</p>
            <p>Option2: {option2}</p>
            <p>Option3: {option3}</p>
            <p>Option4: {option4}</p>
            <p>LicenseType: {licensetype}</p>
            <p>Paralysis: {isparalysis}</p>
            <Button className='btn btn-danger' size='sm' onClick={() => cart.deleteFromCart( question )}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartQuestionBank