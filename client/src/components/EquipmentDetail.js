import { Link, useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function EquipmentDetail({user, deleteProduction}) {
    const [user, setUser] = useState(null);
    const [equipment, setEquipment] = useState({})
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch('/authorized_user')
        .then(r => {
            if(r.ok) { 
                r.json().then(user => { 
                    setUser(user);
                });
            } else {
                r.json().then((errorObj => alert(errorObj.errors)));
            }
        });
    },[]);

    useEffect(() => {
        fetch(`/equipments/${params.id}`)
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

    if (user === authorized_user) {
        function handleDelete() {
            fetch(`/equipments/${params.id}`, {
                method: 'DELETE', 
                headers: {'Content-Type': 'application/json'}
            });
            .then(r => {
                if(r.ok){
                    deleteProduction(id)
                    history.push('/');
                } else {
                    r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
                }
            });
        }
    }

    if (user === authorized_user) {
        const handleCreate = () => {
            fetch(`/equipments`, {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({equipment_id: id, user_id: 1, name: 'Utgard Mage Sallet(0)', job: 'Magician', str: 0, dex: 0, int: 4, luk: 3, hp: 150, mp: 0, def: parseFloat((base_def + (base_def * 0.5))), spd: 0, jump: 0, atk: 0, matk: 0})
            });
            .then(r => {
                if(r.ok){
                    history.push('/users/1')
                } else {
                    r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
                }
            });
        }
    }

    if (user === authorized_user) {
        
    }

    if(loading) return <h1>Loading...</h1>
    if(erorrs) return <h1>{errors}</h1>

    const {id, name, job, image, str, dex, int, luk, hp, mp, def, spd, jump, atk, matk} = equipment 
    return ( 
        <CardDetail> 
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
            <button><Link to={`/equipments/${id}/edit`}>Edit stats</Link></button>
            <button onClick={handleDelete}>Delete equip</button>
            <button onClick={handleCreate}>Create equip</button>
        </CardDetail>
    );
}

export default EquipmentDetail;

const CardDetail = styled.li`
display: flex;
flex-direction: column;
justify-content: start;
font-family: Arial, sans-serif;
margin: 5px;
h1{
    font-size: 60px;
    border-bottom: solid;
    border-color: #42DDF5;
}
.wrapper{
    display: flex;
    div{
        margin:10px;
    }
}
img{
    width: 300px;
}
button{
    background-color: #83AAF1;
    color: white;
    height: 40px;
    font-family: Arial;
    font-size: 30px;
    margin-top: 10px;
}
`

