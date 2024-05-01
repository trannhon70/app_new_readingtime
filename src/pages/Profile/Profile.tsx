import "./Profile.css"
import { FaCircleUser } from "react-icons/fa6";
const Profile = () => {
    return <div className="profile_body">
        <div className="profile_body_title" >Thông tin người dùng</div>
        <div className="form-item-avatar" style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'30px'}}>
                <FaCircleUser size={60} color="white" />
        </div>
        <div className="form-item">
            <label htmlFor="">Email: </label>
            <input
                type="email"
                // placeholder="Nhập email của bạn"
                disabled
            />
        </div>
        <div className="form-item">
            <label htmlFor="">Họ và tên: </label>
            <input
                type="text"
                // placeholder="Nhập email của bạn"
                disabled
            />
        </div>
        <div className="form-item">
            <label htmlFor="">Tuổi: </label>
            <input
                type="text"
                // placeholder="Nhập email của bạn"
                disabled
            />
        </div>
               <div className="form-item">
            <label htmlFor="">Quốc gia: </label>
            <input
                type="text"
                // placeholder="Nhập email của bạn"
                disabled
            />
        </div>
       
    </div>
}

export default Profile