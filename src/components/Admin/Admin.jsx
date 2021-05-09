import { useSelector } from 'react-redux';
import AdminItem from '../AdminItem/AdminItem';
import '../Admin/Admin.css';
import {useHistory} from 'react-router-dom'

import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button'



function Admin({getFeedback}) {

    const history = useHistory()

    // Grabbing feedback list from reducer
    const feedbackList = useSelector( store => store.feedbackReducer)
    // call list of feedback
    getFeedback();

    const toSurvey = () => {
        history.push('/')
    }

    return(

        <>
    <Card elevation={6} className="adminCard">
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
        <Button className="btn" variant="contained" color="default" onClick={toSurvey}>To Survey</Button>

    </Card>
        </>

    )

}

export default Admin