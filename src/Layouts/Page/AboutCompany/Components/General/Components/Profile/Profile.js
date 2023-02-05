import Avatar from "./Avatar";

function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-3 d-inline-flex flex-column justify-content-center'>
                <div className='title mb-2'>SPBEAUTY</div>
                <div className="text-rg-profile mb-1">Салон красоты</div>
                <div className='text-rg-profile'>Санкт-Петербург, Невский пр-т. 28</div>
            </div>                  
        </div>
    );
}

export default Profile;