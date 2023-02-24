import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EquipsList from './components/EquipsList';
// import EditEquipsForm from './components/EditEquipsForm';
// import styled from 'styled-components';

function EquipsDetail({equipment}) {
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const params = useParams();
    const history = useHistory();

 
    useEffect(() => {
        fetch(`/equips/1`)
        .then (r => {
            if(r.ok) { 
                // r.json().then(data => {
                //     setEquips(data);
                //     setLoading(false);
                // })
                setEquips(r);
                //setLoading(false);
            // } else { 
            //     console.log(params);
            //     // r.json().then(data => setErrors(data.error));
            // }
    }})
    }, []);

    const handleCreate = () => {
        const newEquips = {name: "Pensalir Mage Sallet(0)", job: "Magician", str: 0, dex: 0, int: 16, luk: 15, hp: 150, mp: 150, def: 0.05, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://maplestory.fandom.com/wiki/Pensalir_Mage_Sallet?file=Eqp_Pensalir_Mage_Sallet.png'};
        fetch(`/equips`, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(newEquips)
        })
        .then(r => {
            if(r.ok){
                const updatedEquips = [...equips, newEquips]
                setEquips(updatedEquips)
                history.push('/equips')
            } else {
                r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
            }
        });
    }

    function deleteEquips(id) {
        const objWithIdIndex = equips.findIndex((obj) => obj.id === id);
        const results = equips.slice(objWithIdIndex, objWithIdIndex + 1)
        setEquips(results);
      }

    function handleDelete() {
        fetch(`/equips/${params.id}`, {
            method: 'DELETE', 
            headers: {'Content-Type': 'application/json'}
        })
        .then(r => {
            if(r.status === 204){
                deleteEquips(params)
                history.push('/');
            } else {
                r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
            }
        });
    }

    function handleClick(e) { 
        const id = e.target.id;
        console.log(`Clicked the element id: ${id}`);
    }

    // function updateEquips(mockData, id){
    //     const index = equips.findIndex((obj) => obj.id === id);
    //     let results = [...equips];
    //     results[index] = mockData;
    //     setEquips(results);
    // }

    // const handleUpdate = () => { 
    //     const mockData = {name: "Pensalir Mage Sallet(0)", job: "Magician", str: 0, dex: 0, int: 16, luk: 15, hp: 150, mp: 150, def: 0.05, spd: 0, jump: 0, atk: 0, matk: 0, image: 'https://maplestory.fandom.com/wiki/Pensalir_Mage_Sallet?file=Eqp_Pensalir_Mage_Sallet.png'}
    //     fetch(`/equips/${params.id}`, {
    //         method: "PATCH",
    //         headers: {"Content-Type": "application/json"},
    //         body:JSON.stringify(mockData)
    //     })
    //     .then(r => {
    //         if(r.status === 202){
    //             updateEquips(mockData, id)
    //             history.push('/');
    //         } else { 
    //             r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
    //         }
    //     });
    // }
console.log(equips);
    

    if(loading) return <h1>Loading...</h1>
    if(errors) return <h1>{errors}</h1>

    const {name, job, image, str, dex, int, luk, hp, mp, def, spd, jump, atk, matk} = equips
    return ( 
        <card>
            

            <h1>Item name: {name}</h1>
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
                <button onclick={handleClick}/><img src={image} alt='maplestory class image'/>
            </div>
            {/* { (user.admin || user.moderator)  && */}
            (<><button onClick={handleDelete}>Delete equip</button>
            <button onClick={handleCreate}>Create equip</button>
            <button onClick={setShowForm(current => !current)}>{showForm ? "Update" : "Edit"}</button>
            </>)
            
        {/* } */}
        </card>
    );
}

export default EquipsDetail;