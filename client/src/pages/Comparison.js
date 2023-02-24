import { React } from 'react';
import EquipmentCard from './EquipsList';

const kinesis = {
  job: "Kinesis", 
  base_job: "Magician", 
  origin: "Korea"
}
  // function Comparison() { 
  //     fetch(kinesis )
  //     .then(r => r.json());
  //     .then(equipment => )
  // }
function Comparison() {
const results = [kinesis]
// const handleDelete = () => {
//     handleTrash(joke)
// // }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submitting :)", rating, comment)
//     fetch(`${API}/equipment/${id}/comments`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       rating: rating,
//       comment: comment
//     }),
//   });
// };

 return ( 
     <> 
          <EquipmentCard equipment={kinesis} />
     </> 
 )
}
export default Comparison;