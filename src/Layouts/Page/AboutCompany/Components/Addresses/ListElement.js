import styled from 'styled-components';
//import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`

`;

const IconWrapper = styled.div`
    border-radius: 24px;
    box-sizing:border-box;
    right: 0px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='text-rg flex-grow-1'>{props.children}</Option>
            {/*<SecondaryButton minWidth='0'>Ред.</SecondaryButton>
            <SecondaryButton minWidth='0'>Удл.</SecondaryButton>*/}
            <IconWrapper>
                <IconOnlyButton icon={<EditIcon/>}/>
            </IconWrapper>
            <IconWrapper>
                <IconOnlyButton icon={<RemoveIcon/>}/>
            </IconWrapper>
        </div>
    );
}

export default ListElement;