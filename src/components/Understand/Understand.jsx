import {useHistory} from 'react-router-dom';


function Understand() {

    const history = useHistory()

    const handleNext = () => {
        console.log('You clicked Next with Feeling');

        history.push('/support')

    }


    return(
        <>
        <h2>How well are you understanding the content?</h2>

        <button onClick={handleNext}>Next</button>
        </>
        
    )
}

export default Understand