import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../api/axios';

const ExamDetail = () => {
    const [examDetail, setExamDetail] = useState([{}]);
    const location = useLocation();
    const getExamDetail = async () => {
        const examID = location.state.examId;
        const jwt = localStorage.getItem("jwt");
        const responseExamDetail = await axios.get(`exam/GetQuizByStaff?$filter=examQueries/any(c : c/examId eq  ${examID})`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        });
        const count = responseExamDetail.data[0].examQueries.length
        for (let index = 0; index < count; index++) {
            if (responseExamDetail.data[0].examQueries[index].examId == examID) {
                setExamDetail(responseExamDetail.data[0].examQueries[index]);
            }
        }
    }
    useEffect(() => {
        getExamDetail();

    }, [])
    console.log(examDetail)
    return (
        <div>
            {examDetail && examDetail != null ? (
                <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
                    <div className='text-3xl text-teal-300'
                    >{examDetail.examName}</div>
                    {examDetail.examDetails?.map((data, index) => (
                        <div key={index}>
                            <div>
                                <figure className="max-w-lg">
                                    <img className="h-auto max-w-full rounded-lg" src={"https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/signage%2F" + data.image + "?alt=media&token=4fba535f-2cca-40a1-ab60-de42778a10b5"} alt="image description" />
                                </figure>
                                <h3 className='text-center mb-4 text-xl text-slate-700'>{data.questionId}:{data.text}</h3>
                                <div class="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <div className='text-sm '>
                                         1. {data.options1}
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-sm '>
                                         2. {data.options2}
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-sm '>
                                         3. {data.options3}
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-sm '>
                                         4. {data.options4}
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-sm text-teal-500'>
                                         Answer: {data.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : <h3> Don't have any data in this quiz </h3>
            }
        </div>
    )
}

export default ExamDetail