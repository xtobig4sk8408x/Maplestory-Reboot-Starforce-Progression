import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import styled from 'styled-components';

function EquipmentDetail({user}) {
    const [equipment, setEquipment] = useState({})
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const params = useParams();
    const history = useHistory();

 
    useEffect(() => {
        fetch(`/equips/${params.id}`)
        .then (r => {
            if(r.ok) { 
                r.json().then(data => {
                    setEquipment(data);
                    setLoading(false);
                })
            } else { 
                console.log('error');
                r.json().then(data => setErrors(data.error));
            }
        });
    }, []);

    const handleCreate = () => {
        const newEquipment = {name: "Pensalir Mage Sallet(0)", job: "Magician", str: 0, dex: 0, int: 16, luk: 15, hp: 150, mp: 150, def: 0.05, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://maplestory.fandom.com/wiki/Pensalir_Mage_Sallet?file=Eqp_Pensalir_Mage_Sallet.png'};
        fetch(`/equips`, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(newEquipment)
        })
        .then(r => {
            if(r.ok){
                const updatedEquipment = [...equipment, newEquipment]
                setEquipment(updatedEquipment)
                history.push('/equipment')
            } else {
                r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
            }
        });
    }

    function deleteEquipment(id) {
        const objWithIdIndex = equipment.findIndex((obj) => obj.id === id);
        const results = equipment.slice(objWithIdIndex, objWithIdIndex + 1)
        setEquipment(results);
      }

    function handleDelete() {
        fetch(`/equips/${params.id}`, {
            method: 'DELETE', 
            headers: {'Content-Type': 'application/json'}
        })
        .then(r => {
            if(r.status === 204){
                deleteEquipment(id)
                history.push('/');
            } else {
                r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
            }
        });
    }

    function updateEquipment(mockData, id){
        const index = equipment.findIndex((obj) => obj.id === id);
        let results = [...equipment];
        results[index] = mockData;
        setEquipment(results);
    }

    const handleUpdate = () => { 
        const mockData = {name: "Pensalir Mage Sallet(0)", job: "Magician", str: 0, dex: 0, int: 16, luk: 15, hp: 150, mp: 150, def: 0.05, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://maplestory.fandom.com/wiki/Pensalir_Mage_Sallet?file=Eqp_Pensalir_Mage_Sallet.png'}
        fetch(`/equips/${params.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(mockData)
        })
        .then(r => {
            if(r.status === 202){
                updateEquipment(mockData, id)
                history.push('/');
            } else { 
                r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
            }
        });
    }

    

    if(loading) return <h1>Loading...</h1>
    if(errors) return <h1>{errors}</h1>

    const {id, name, job, image, str, dex, int, luk, hp, mp, def, spd, jump, atk, matk} = equipment 
    return ( 
        <card>
            <h1>{name}</h1>
            <div className='wrapper'>
                <div>
                    <h3>Job: {job}</h3>
                    <p>Strength: {str}</p>
                    <p>Dexterity: {dex}</p> 
                    <p>Intelligence: {int}</p>
                    <p>Luck: {luk}</p>
                    <p>HP: {hp}</p>
                    <p>MP: {mp}</p>
                    <p>Defense: {def}</p>
                    <p>Speed: {spd}</p>
                    <p>Jump: {jump}</p>
                    <p>Weapon Attack: {atk}</p>
                    <p>Magic Attack: {matk}</p>
                </div>
                <img src={image} alt='maplestory class image'/>
            </div>
            { (user.admin || user.moderator)  &&
            (<><button onClick={handleDelete}>Delete equip</button>
            <button onClick={handleCreate}>Create equip</button>
            <button onClick={setShowForm(current => !current)}>{showForm ? "Update" : "Edit"}</button>
            </>)
            
        }
        </card>
    );
}

export default EquipmentDetail;

// const CardDetail = styled.li`
// display: flex;
// flex-direction: column;
// justify-content: start;
// font-family: Arial, sans-serif;
// margin: 5px;
// h1{
//     font-size: 60px;
//     border-bottom: solid;
//     border-color: #42DDF5;
// }
// .wrapper{
//     display: flex;
//     div{
//         margin:10px;
//     }
// }
// img{
//     width: 300px;
// }
// button{
//     background-color: #83AAF1;
//     color: white;
//     height: 40px;
//     font-family: Arial;
//     font-size: 30px;
//     margin-top: 10px;
// }
// `

