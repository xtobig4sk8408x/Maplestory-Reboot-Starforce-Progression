import styled from 'styled-components';
import EquipmentCard from './EquipmentCard';

function EquipmentContainer({equipment}) {

    return ( 
        <div>
            <Title>Equipment Stats</Title>
            <CardContainer>
                {equipment.map(equipment => <EquipmentCard key={equipment.id} equipment={equipment} />)}
            </CardContainer>
        </div>
    );
}
export default EquipmentContainer;

const Title = styled.h1`
text-transform: uppercase;
font-family: Arial, sans-serif;
width: 70px;
font-size: 70px;
line-height: .8;
transform: scale(.7, 1.4);
span{
    color:#83AAF1;
}`