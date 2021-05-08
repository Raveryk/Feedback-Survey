import {useHistory} from 'react-router-dom';


function Success() {

    const history = useHistory()

    const returnHome = () => {
        history.push('/')
    }

    // const toEdit = () => {
    //     history.push('/edit');
    // }


    return(
        <>
        <h2>Success Submitting Feedback!</h2>

        <button onClick={returnHome}>Leave New Feedback</button>
        {/* <p><button onClick={toEdit}>Edit Feedback</button></p> */}

        </>
       
    )
}

export default Success