import { useEffect, useState } from 'react';

function EquipmentList({name, job, str, dex, int, luk, hp, mp, def, spd, jump, atk, matk}) { 
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
        <h2>{item.name}</h2>
        <p>{item.job}</p>
        <p>{item.str}</p>
        <p>{item.dex}</p>
        <p>{item.int}</p>
        <p>{item.luk}</p>
        <p>{item.hp}</p>
        <p>{item.mp}</p>
        <p>{item.def}</p>
        <p>{item.spd}</p>
        <p>{item.jump}</p>
        <p>{item.atk}</p>
        <p>{item.matk}</p>
      </div>
    ))}
    </>
  )
}

export default EquipmentList;

// const Card = styled.li`
// display: flex;
// flex-direction: row;
// justify-content: start;
// font-family: Arial, sans-serif;
// margin: 10px;
// &:hover {
//   transform: scale(1.15);
//   transform-origin: top left;
// }
// a{
//   text-decoration: none;
//   color: white;
// }
// img{
//   width: 180px;
//   margin-left: 20%;
//   mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);
// }
// position: relative;
// div{
//   position: absolute;
// }
// `