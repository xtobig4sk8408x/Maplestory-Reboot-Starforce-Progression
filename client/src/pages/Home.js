import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home({user, currentUser}) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch ("/user") 
        .then (r => r.json())
        .then (setUser => user);
    }, []); 

//     function handleDelete(id) { 
//         fetch(`/equipment/${id}`, {
//             method: "DELETE",
//     }).then((r) => {
//         if (r.ok) { 
//             setEquipment((equipment) => 
//             equipment.filter((equip) => equip.id !== id)
//             );
//         }
//     }); 
// }   

    return ( 
        <>
        if (currentUser == user) {
            <Header>Hello, ${currentUser.user}</Header>
            <h1>Don't forget to do your dailies!</h1>
            <h1>Don't</h1>
        }
        

        </>
    )
}
export default Home; 