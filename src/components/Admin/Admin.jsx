import { useSelector } from 'react-redux';
import AdminItem from '../AdminItem/AdminItem';


function Admin({getFeedback}) {

    // Grabbing feedback from reducer
    const feedbackList = useSelector( store => store.feedbackReducer)

    return(

        <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                    {feedbackList.map((item) => {
                        return <tr><AdminItem item={item} getFeedback={getFeedback}/></tr> 
                        })}
            </tbody>
        </table>

        </>

    )

}

export default Admin