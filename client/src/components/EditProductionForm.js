import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from '../styled/Form';

function EditEquipmentForm({updateEquipment}) {
    const [formData, setFormData] = useState({
        name: '',
        job: '',
        image: '',
        str: '', 
        dex: '', 
        int: '',  
        luk: '', 
        hp: '', 
        mp: '', 
        def: '', 
        spd: '', 
        jump: '', 
        atk: '', 
        matk: ''
    });
    const [errors, setErrors] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`/equipments/${id}`)
        .then(r => r.json()).then(setFormData)
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function onSubmit(e) {
        e.preventDefault();
        fetch(`/productions/${id}`, {
            method: 'PATCH', 
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(formData);
        });
        .then(r => {
            if(r.ok){
                r.json().then(updateEquipment)
            } else {
                r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
            }
        });
    }

    return ( 
        <div className='App'>
            {errors?errors.map(e => <div>{e}</div>):null}
            <Form onSubmit={onSubmit}>
                <label>Name</label>
                <input type='text' name='name' value={formData.name} onChange={handleChange} />
                <label>Job</label>
                <input type='text' name='job' value={formData.job} onChange={handleChange} />
                <label>Image</label>
                <input type='text' name='image' value={formData.image} onChange={handleChange} />
                <label>Strength Stat</label>
                <input type='text' name='strength' value={formData.str} onChange={handleChange} />
                <label>Dexterity Stat</label>
                <input type='text' name='dexterity' value={formData.dex} onChange={handleChange} />
                <label>Intelligence Stat</label>
                <input type='text' name='intelligence' value={formData.int} onChange={handleChange} />
                <label>Luck stat</label>
                <input type='text' name='luck' value={formData.luk} onChange={handleChange} />
                <label>Health Points</label>
                <input type='text' name='name' value={formData.hp} onChange={handleChange} />
                <label>Mana Points</label>
                <input type='text' name='name' value={formData.mp} onChange={handleChange} />
                <label>Defense Stat</label>
                <input type='text' name='name' value={formData.def} onChange={handleChange} />
                <label>Speed Stat</label>
                <input type='text' name='name' value={formData.spd} onChange={handleChange} />
                <label>Jump Stat</label>
                <input type='text' name='name' value={formData.jump} onChange={handleChange} />
                <label>Weapon Attack</label>
                <input type='text' name='name' value={formData.atk} onChange={handleChange} />
                <label>Magic Attack</label>
                <input type='text' name='name' value={formData.matk} onChange={handleChange} />
            </Form>
        </div>
    )
}