import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';


function Review() {

    const history = useHistory()

    const feelingNum = useSelector( store => store.feelingReducer );
    const understandNum = useSelector( store => store.contentReducer );
    const supportNum = useSelector( store => store.supportReducer );



    const handleSubmit = () => {
        console.log('You submitted some feedback!');

        //POST route
        // history.push('/success')
    }


    return(
        <>
        <h2>Review Your Feedback</h2>

        <p>Feelings: {feelingNum} </p>
        <p>Understanding: {understandNum}</p>
        <p>Support: {supportNum}</p>
        <p>Comments: </p>


        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Review