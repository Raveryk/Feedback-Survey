import axios from "axios";

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

function AdminItem({ item, getFeedback }) {
  // function to delete targeted feedback
  const deleteFeedback = (event) => {
    axios
      .delete(`/feedback/${item.id}`)
      .then((response) => {
        console.log("You deleted something.", response);
        // refresh feedback list after delete occurs
        getFeedback();
      })
      .catch((error) => {
        console.log("Something went wrong deleting feedback.", error);
      });
  };

  return (
    <>
      <td id={item.id}>{item.feeling}</td>
      <td id={item.id}>{item.understanding}</td>
      <td id={item.id}>{item.support}</td>
      <td id={item.id}>{item.comments}</td>
      <td id={item.id}>{item.date.slice(5, 10)}</td>
      <td id={item.id}>
        <Button startIcon={<DeleteIcon/>} onClick={() => deleteFeedback(event)}></Button>
      </td>
    </>
  );
}

export default AdminItem;
