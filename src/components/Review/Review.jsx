import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';


function Review() {

    const history = useHistory()

    const feelingNum = useSelector( store => store.feelingReducer );
    const understandNum = useSelector( store => store.contentReducer );
    const supportNum = useSelector( store => store.supportReducer );
    const commentText = useSelector( store => store.commentReducer );




    const handleSubmit = () => {
        console.log('You submitted some feedback!');

        //POST route in here and in server.js
        axios.get('/')

        history.push('/success')
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