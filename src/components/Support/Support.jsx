import {useHistory} from 'react-router-dom';


function Support() {

    const history = useHistory()

    const handleNext = () => {
        console.log('You clicked Next with Feeling');

        history.push('/comments')

    }


    return(
        <>
        <h2>How well are you being supported?</h2>

        <button onClick={handleNext}>Next</button>
        </>

       
    )
}

export default Support