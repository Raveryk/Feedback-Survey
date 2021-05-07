import {useHistory} from 'react-router-dom';


function Understand() {

    const history = useHistory()

    const handleNext = () => {
        console.log('You clicked Next with Understanding');

        history.push('/support')

    }


    return(
        <>
        <h2>How well are you understanding the content?</h2>
        <h5>Scale from 1-6 where 1 = Very Poor and 6 = Very Well</h5>
        <input type="number" max="6" min="1" required/>

        <button onClick={handleNext}>Next</button>
        </>
        
    )
}

export default Understand