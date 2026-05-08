//components/PersonalInfo.js

const name ="Pooja Chavda";
const role = "UI/UX Designer & Frontend Developer";


function PersonalInfo() {
    return (
        <div className="personal-info">
            <h2 className="name">{name}</h2>
            <p className="role">{role}</p>
        </div>
    )
}

export default PersonalInfo;