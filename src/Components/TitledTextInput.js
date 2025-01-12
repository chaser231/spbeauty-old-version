import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    background: #F8FAFC;
    color: #0f172a;
    width: 450px;
    &:hover {
        background-color: #F8FAFC;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='text-caption-rg'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='px-3 py-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;