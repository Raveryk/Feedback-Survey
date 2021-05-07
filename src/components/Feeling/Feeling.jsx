import {useHistory} from 'react-router-dom';

function Feeling() {

    const history = useHistory()

    const handleNext = () => {
        console.log('You clicked Next with Feeling');

        history.push('/understand')

    }

    return(
        <>

        <h2>How are you feeling today?</h2>

        <button onClick={handleNext}>Next</button>

        </>

      
    )
}

export default Feeling