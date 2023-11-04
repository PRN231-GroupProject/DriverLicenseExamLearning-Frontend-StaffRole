import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const QuestionContext = createContext({

    items: [],
    getQuestionQuantity: () => { },
    deleteFromCart: () => { },
    getTotalCart: () => { },
    addQuestionToCart: () => { },
    CheckQuestionHaveInCart: () => { }
});


export function CartProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([]);

    function CheckQuestionHaveInCart(questionInput) {
        const checkQuestion = cartProducts.find(question => question.question.text === questionInput)?.question.text;
        if (checkQuestion == null) {
            return 0;

        }
        return 1
    }
    function addQuestionToCart(question) {

        const check = CheckQuestionHaveInCart(question.text);
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
        console.log('delete from cart' + question)
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.question.text != question
                }))
    }
    const contextValue = {
        items: cartProducts,
        getQuestionQuantity,
        deleteFromCart,
        getTotalCart,
        addQuestionToCart,
        CheckQuestionHaveInCart
    }
    return (
        <QuestionContext.Provider value={contextValue}>
            {children}
        </QuestionContext.Provider>
    )
}

export default CartProvider