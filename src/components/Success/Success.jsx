import {useHistory} from 'react-router-dom';


function Success() {

    const history = useHistory()

    const returnHome = () => {
        history.push('/')
    }



    return(
        <>
        <h2>Success Submitting Feedback!</h2>

        <button onClick={returnHome}>Leave New Feedback</button>

        </>
       
    )
}

export default Success