import React from 'react'
import { useLocation } from 'react-router-dom'
const Question = () => {
  const location = useLocation();
  console.log(location.state.question)
  const questionData = location.state.question
  return (
    <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
      <div>
        <figure className="max-w-lg">
          <img className="h-auto max-w-full rounded-lg" src={"https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/signage%2F" + questionData.image + "?alt=media&token=4fba535f-2cca-40a1-ab60-de42778a10b5"} alt="image description" />
        </figure>
        <h3 className='text-center mb-4 text-xl text-slate-700'>{questionData.questionId}: {questionData.text}</h3>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <div className='text-sm '>
              1. {questionData.options1}
            </div>
          </div>
          <div>
            <div className='text-sm '>
              2. {questionData.options2}
            </div>
          </div>
          <div>
            <div className='text-sm '>
              3. {questionData.options3}
            </div>
          </div>
          <div>
            <div className='text-sm '>
              4. {questionData.options4}
            </div>
          </div>
          <div>
            <div className='text-sm text-teal-500'>
              Answer: {questionData.answer}
            </div>
          </div>
          <div></div>
          <div className='text-sm text-red-600'>
            Is Paralysis Question : {questionData.paralysisQuestion.toString()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question