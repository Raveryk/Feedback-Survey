import axios from 'axios';


function AdminItem({item, getFeedback}) {

    const deleteFeedback = (event) => {

        console.log('You are trying to delete feedback with id:', item.id);

        axios.delete(`/feedback/${item.id}`)
        .then(response => {
            console.log('You deleted something.', response);
            getFeedback();
        })
        .catch(error => {
            console.log('Something went wrong deleting feedback.', error);
            
        })
        
    }


    return(

        <>
    <td id={item.id}>{item.id}</td> 
    <td id={item.id}>{item.feeling}</td>
    <td id={item.id}>{item.understanding}</td>
    <td id={item.id}>{item.support}</td>
    <td id={item.id}>{item.comments}</td>
    <td id={item.id}>{item.date.slice(5,10)}</td>
    <td id={item.id}><button onClick={() => deleteFeedback(event)}>DELETE</button></td>
    


        </>

    )
}

export default AdminItem