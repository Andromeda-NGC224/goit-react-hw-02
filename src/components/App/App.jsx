import { useState } from 'react'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import css from './App.module.css'


export default function App() {

const [reviews, setReviews] = useState({
	good: 0,
	neutral: 0,
	bad: 0
}  
);
    
function updateFeedback(feedbackType) {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1
    })
}
    
const totalFeedback = reviews.good + reviews.neutral + reviews.bad;


 return (
        <>
            <Description />
            <Options
             clickFeedback={updateFeedback}
         />
         {totalFeedback > 0 ? 
            <Feedback
                good={reviews.good}
                neutral={reviews.neutral}
                bad={reviews.bad} /> : <Notification/>}
        </>
    )
    
}