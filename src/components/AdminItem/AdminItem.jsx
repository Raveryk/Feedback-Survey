
function AdminItem({item, i}) {


    return(

        <>
    <td id={i}>{item.id}</td> 
    <td id={i}>{item.feeling}</td>
    <td id={i}>{item.understanding}</td>
    <td id={i}>{item.support}</td>
    <td id={i}>{item.comments}</td>
    <td id={i}>{item.date.slice(5,10)}</td>
    <td id={i}><button>DELETE</button></td>
    


        </>

    )
}

export default AdminItem