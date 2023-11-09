import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const ExamContext = createContext({

    items: [],
    getQuestionQuantity: () => { },
    deleteFromCart: () => { },
    getTotalCart: () => { },
    addQuestionToExam: () => { },
    CheckQuestionHaveInList: () => { },
    getLicenseType: () => { },
    setLicenseType: () => { },
    refreshCart: () => { },

});


export function ExamProvider({ children }) {
    const [licenseTypeID, setLicenseTypeID] = useState('com suon');
    const [cartProducts, setCartProducts] = useState([]);


    function getLicenseType() {

        return licenseTypeID
    }

    function setLicenseType(licenseType) {
        console.log(licenseType);
        setLicenseTypeID(licenseType);
    }
    function CheckQuestionHaveInCart(questionInput) {
        const checkQuestion = cartProducts.find(question => question.question.text === questionInput)?.question.text;
        if (checkQuestion == null) {
            return 0;

        }
        return 1
    }
    function addQuestionToExam(question) {
        console.log(question)

        if (licenseTypeID != question.licenseTypeId) {
            toast.error('🐞 Set License Type First Or You Add have another License Type ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } else {
            const check = CheckQuestionHaveInCart(question.text);
            if (check == 0) {
                toast('📥 Add Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
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
            } else {

                toast.error(' 👽 This question already have in cart', {
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


        }
    }


    function getQuestionQuantity(id) {

        console.log(" in quenstion quantity " + id);
        return id;

    }

    function getTotalCart() {
        let totalConst = 0;
        totalConst += 1;
    }


    function refreshCart() {
        setCartProducts([]);
    }
    function deleteFromCart(question) {
        console.log(question)
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
        addQuestionToExam,
        CheckQuestionHaveInCart,
        getLicenseType,
        setLicenseType,
        refreshCart,
    }
    return (
        <ExamContext.Provider value={contextValue}>
            {children}
        </ExamContext.Provider>
    )
}

export default ExamProvider