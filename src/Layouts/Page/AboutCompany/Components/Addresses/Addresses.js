//import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column justify-content-between col border rounded-2'>
            <div className='title d-inline-flex flex-column gap-5 px-3 py-4'>Адреса заведений
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <div className='d-inline-flex flex-column px-3 py-4'>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;