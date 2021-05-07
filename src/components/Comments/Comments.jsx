import {useHistory} from 'react-router-dom';


function Comments() {

    const history = useHistory()

    const handleNext = () => {
        console.log('You clicked Next with Comments');

        history.push('/review')

    }


    return(
        <>
        <h2>Any comments you want to leave?</h2>
        <input type="textArea" />

        <button onClick={handleNext}>Next</button>
        </>
    )
}

export default Comments