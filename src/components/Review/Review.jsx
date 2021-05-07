import {useHistory} from 'react-router-dom';


function Review() {

    const history = useHistory()

    const handleSubmit = () => {
        console.log('You submitted some feedback!');

        //POST route
        // history.push('/success')
    }


    return(
        <>
        <h2>Review Your Feedback</h2>

        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Review