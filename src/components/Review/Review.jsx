import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import moment from 'moment';



function Review() {

    const history = useHistory()

    const dispatch = useDispatch();

    const feelingNum = useSelector( store => store.feelingReducer );
    const understandNum = useSelector( store => store.contentReducer );
    const supportNum = useSelector( store => store.supportReducer );
    const commentText = useSelector( store => store.commentReducer );




    const handleSubmit = () => {
        console.log('You submitted some feedback!');

        const feedbackData = {
            feeling: Number(feelingNum),
            understanding: Number(understandNum),
            support: Number(supportNum),
            comments: commentText
        }

        //POST route in here and in server.js
        axios.post('/feedback', feedbackData)
        .then(response => {
            console.log('Added feedback successfully.', response);
            dispatch({ type: 'CLEAR_FEEDBACK' });

            history.push('/success');
        })
        .catch( error => {
            alert('Error submitting feedback')
            console.log('Something went wrong entering the feedback.', error);
        })

    
        
    }

    

    return(
        <>
        <h2>Review Your Feedback</h2>

        <p>Feelings: {feelingNum} </p>
        <p>Understanding: {understandNum}</p>
        <p>Support: {supportNum}</p>
        <p>Comments: {commentText}</p>


        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Review