import { useEffect, useState } from 'react';

function EquipsList() { 
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch(`/equips`)
    .then (r => {
        if(r.ok) { 
            r.json().then(data => {
                setEquipment(data);
                setLoading(false);
            })
        } else { 
            r.json().then(data => setErrors(data.error));
        }
    });
}, []);

console.log();
  return ( 
    <>
    {equipment.map((item) => (
      <div>
        <img src={item.image} alt="pensalir mage sallet maplestory" />
        <h2>Name: {item.name}</h2>
        <p>Job: {item.job}</p>
        <p>Strength: {item.str}</p>
        <p>Dexterity: {item.dex}</p>
        <p>Intelligence: {item.int}</p>
        <p>Luck: {item.luk}</p>
        <p>HP: {item.hp}</p>
        <p>MP: {item.mp}</p>
        <p>Defense: {item.def}</p>
        <p>Speed: {item.spd}</p>
        <p>Jump: {item.jump}</p>
        <p>Attack: {item.atk}</p>
        <p>Magic Attack: {item.matk}</p>
      </div>
    ))}
    </>
  )
}

export default EquipsList;
