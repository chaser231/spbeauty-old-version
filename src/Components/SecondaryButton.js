import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: #FFF;
        border: 1px solid #64748B;
        border-radius: 24px;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            background: #fff;
            opacity: 0.8;
        }
        &:active {
            background: #FFF;
        }
        &:pressed {
            background: #64748B;
            opacity: 0.6;
        }
        &:disabled {
            background: #F8FAFC;
            opacity: 0.4;
            border: 1px solid #F1F5F9;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;