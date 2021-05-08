import { useSelector } from 'react-redux';
import AdminItem from '../AdminItem/AdminItem';
import '../Admin/Admin.css';


function Admin({getFeedback}) {

    // Grabbing feedback list from reducer
    const feedbackList = useSelector( store => store.feedbackReducer)

    return(

        <>
        <h2>Administrator View</h2>
        <table className="adminTable">
            <thead className="tableHeader">
                <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody className="tableBody">
                    {feedbackList.map((item) => {
                        return <tr><AdminItem item={item} getFeedback={getFeedback}/></tr> 
                        })}
            </tbody>
        </table>

        </>

    )

}

export default Admin