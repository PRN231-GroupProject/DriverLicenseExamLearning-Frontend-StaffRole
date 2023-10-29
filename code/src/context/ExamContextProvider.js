import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const ExamContext = createContext({

    items: [],
    getQuestionQuantity: () => { },
    deleteFromCart: () => { },
    getTotalCart: () => { },
    addQuestionToExam: () => { },
    CheckQuestionHaveInList: () => { }
});


export function ExamProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([]);

    function CheckQuestionHaveInCart(questionInput) {
        const checkQuestion = cartProducts.find(question => question.question.question === questionInput)?.question.question;
        if (checkQuestion == null) {
            return 0;

        }
        return 1
    }
    function addQuestionToExam(question) {

        const check = CheckQuestionHaveInCart(question.question);
        if (check == 0) {

            console.log(question)
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        question: question,
                        quantity: 1
                    }
                ]
            )
        }else {

            toast.error('🦄 This question already have in cart', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
       
       
       
            }
        // const location = useLocation()
        // const state = location.state



    }


    function getQuestionQuantity(id) {

        console.log(" in quenstion quantity " + id);
        return id;

    }

    function getTotalCart() {
        let totalConst = 0;
        totalConst += 1;
    }



    function deleteFromCart(question) {
        console.log(question)
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.question != question
                }))
    }
    const contextValue = {
        items: cartProducts,
        getQuestionQuantity,
        deleteFromCart,
        getTotalCart,
        addQuestionToExam,
        CheckQuestionHaveInCart
    }
    return (
        <ExamContext.Provider value={contextValue}>
            {children}
        </ExamContext.Provider>
    )
}

export default ExamProvider